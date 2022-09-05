import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BehaviorSubject } from 'rxjs';
import { DoccompensationService } from '../../../../@core/backend/common/services/doccompensation.service';
import { DoccompensationsatxmlService } from '../../../../@core/backend/common/services/doccompensationsatxml.service';
import { DoccompensationsatService } from '../../../../@core/backend/common/services/doccompesationsat.service';
import { Doccompesationsat } from '../../../../@core/interfaces/auction/doccompesationsat.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-doccompensation-detail',
  templateUrl: './doccompensation-detail.component.html',
  styleUrls: ['./doccompensation-detail.component.scss']
})
export class DoccompensationDetailComponent extends BasePage {

  public form: FormGroup;
  private data: Doccompesationsat;
  public actionBtn: string = "Guardar";
  public doc$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public docsat$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DoccompensationService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    private doc:DoccompensationsatService,
    private docsat:DoccompensationsatxmlService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.form = this.fb.group({
      id:[null],
      satTypeJob: [null, Validators.compose([Validators.required])]  ,
      idTypeDocSat: [null, Validators.min(1)],
      detailsat:[null, Validators.compose([Validators.required])],
      idTypeDocSatXml: [null, Validators.min(1)], 
      detailsatxml:[null, Validators.compose([Validators.required])],
      typeDocSae: [null, Validators.compose([Validators.required])],  
      type: [null, Validators.compose([Validators.required])]
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)
    }

    this.form.controls['detailsat'].valueChanges.subscribe((value: string) => {
      if (value) {
        this.doc.search(value).subscribe(data => {
          this.doc$.next(data);
        })
      }
    })
    
    this.form.controls['detailsatxml'].valueChanges.subscribe((value: string) => {
     
      if (value) {
        this.docsat.search(value).subscribe(data => {
          console.log(data)
          this.docsat$.next(data);
        })
      }
    })
  }

  public get satTypeJob() { return this.form.get('satTypeJob'); }
  public get idTypeDocSat() { return this.form.get('idTypeDocSat'); }
  public get detailsat() { return this.form.get('detailsat'); }
  public get idTypeDocSatXml() { return this.form.get('idTypeDocSatXml'); }
  public get detailsatxml() { return this.form.get('detailsatxml'); }
  public get typeDocSae() { return this.form.get('typeDocSae'); }
  public get type() { return this.form.get('type'); }

  public onSelectionChangeDoc(event){
    if(event.id){
      this.form.controls['idTypeDocSat'].setValue(event.id);
      this.form.controls['detailsat'].setValue(event.typeDocSat);
    }
        
  }

  public onSelectionChangeDocsat(event){
    if(event.id){
      this.form.controls['idTypeDocSatXml'].setValue(event.id);
      this.form.controls['detailsatxml'].setValue(event.typeDocSatXml);
    }
        
  }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    delete data.detailsat;
    delete data.detailsatxml;
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Doc resarcimiento', 'Registrado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
  private updateRegister(data): void {
    this.service.update(this.data.id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Doc resarcimineto', 'Actualizado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

}
