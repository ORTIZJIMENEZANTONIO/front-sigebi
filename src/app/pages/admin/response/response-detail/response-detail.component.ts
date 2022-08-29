import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { BehaviorSubject } from 'rxjs';

import { STRING_PATTERN } from '../../../../@components/constants';
import { NUMBERS_PATTERN } from '../../../../@components/constants';
import { ResponseInterface } from '../../../../@core/interfaces/auction/response.model';
import { ResponseService } from '../../../../@core/backend/common/services/response.service';
import { QuestionService } from '../../../../@core/backend/common/services/question.service';

@Component({
  selector: 'ngx-response-detail',
  templateUrl: './response-detail.component.html',
  styleUrls: ['./response-detail.component.scss']
})
export class ResponseDetailComponent extends BasePage implements OnInit {

  public form: FormGroup;
  private data: ResponseInterface;
  public actionBtn: string = "Guardar";
  public filteredOptions$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    private service: ResponseService,
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private questionService: QuestionService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    ) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  private prepareForm(): void {
    this.form = this.fb.group({
      id: ['', Validators.compose([Validators.required, Validators.pattern(NUMBERS_PATTERN) ])],
      question: [ '', Validators.compose([ Validators.pattern(STRING_PATTERN)]) ],
      idQuestion: ['', Validators.compose([Validators.required, Validators.pattern(NUMBERS_PATTERN) ])],
      text: ['', Validators.compose([ Validators.minLength(1), Validators.maxLength(80), Validators.pattern(STRING_PATTERN) ])],
      startValue: [ '', Validators.compose([ Validators.pattern(NUMBERS_PATTERN)]) ],
      endValue: [null, Validators.compose([ Validators.pattern(NUMBERS_PATTERN) ])],
      registryNumber: [null, Validators.compose([ Validators.pattern(NUMBERS_PATTERN) ])],
    });
    if (this.data) { 
      const dataUpdt = {
        ...this.data,
        idQuestion: this.data.idQuestion.id,
        question: this.data.idQuestion.text,
      } 
      this.actionBtn = "Actualizar";
      this.form.patchValue(dataUpdt);
      this.form.controls['id'].disable();
      this.form.controls['question'].disable();
    }
    this.form.controls['question'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.questionService.search(value).subscribe(data => {
          this.filteredOptions$.next(data);
        })
      }
    })
  }

  public get id() { return this.form.get('id'); }
  public get question() { return this.form.get('question'); }
  public get text() { return this.form.get('text'); }
  public get startValue() { return this.form.get('startValue'); }
  public get endValue() { return this.form.get('endValue'); }
  public get registryNumber() { return this.form.get('registryNumber'); }

  public onSelectionChangeQuestion(event){
    if(event.id){
      this.form.controls['idQuestion'].setValue(event.id);
      this.form.controls['question'].setValue(event.text);
    }
        
  }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Respuesta', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.error?.message
            ? err.error.message
            : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

  private updateRegister(data): void {
    delete data.id;
    delete data.idQuestion;
    this.service.update( {id:this.data.id, idQuestion: this.data.idQuestion.id}, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Serie', 'Actualizado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

}
