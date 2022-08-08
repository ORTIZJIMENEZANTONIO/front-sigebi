import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { STRING_PATTERN } from '../../../../@components/constants';
import { CategoryService } from '../../../../@core/backend/common/services/category.service';
import { BaseApp } from '../../../../@core/shared/base-app';
import { CategoryModel } from '../../../../@core/interfaces/auction/category.model';
import { DomSanitizer } from '@angular/platform-browser';



export enum CategoryFormMode {
  VIEW = 'View',
  EDIT = 'Edit',
  ADD = 'Add',
  EDIT_SELF = 'EditSelf',
}

@Component({
  selector: 'ngx-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent extends BaseApp {

  categoryForm: FormGroup;
  category: any = {};

  catImgHtml: any;

  //file management
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;

  @Input()
  requiredFileType: string;
  
  constructor(private fb: FormBuilder, protected cd: ChangeDetectorRef, protected router: Router, private service: CategoryService,
    public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private dom: DomSanitizer) {
    super();
    //console.log("Category Init:::" + JSON.stringify(context.category));
    if (null != context.category){
      this.category = context.category;
    }
  }

  transform(value) {
    this.catImgHtml = this.dom.bypassSecurityTrustHtml(value);
  }

  ngOnInit(): void {
    this.prepareForm();

  }

  prepareForm = function(){
    const photoValidators = [
    ];
    if (null == this.category){
      photoValidators.push(Validators.required);
    }
    

    this.categoryForm = this.fb.group({
      id: [0],
      name: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern(STRING_PATTERN)])],
      photo: ['', [...photoValidators]],
    });

    if (null != this.category) {
      //this.categoryForm =this.category;
      this.categoryForm.patchValue(this.category);
      this.transform(this.category.imageUrl);
    }
  }

  get name() { return this.categoryForm.get('name'); }
  get photo() { return this.categoryForm.get('photo'); }

  fillMessages: () => void = function () {
    this.validation_messages = {
      name: []
    }
  };

  /*
  myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
  };
  */

  register(): void {


    /*
    this.user = this.registerForm.value;
    this.errors = this.messages = [];
    this.submitted = true;
    */
    this.category = this.categoryForm.value;
    console.log("Category:::" + JSON.stringify(this.category));
    //this.currentFile = this.selectedFiles.item(0);
    //console.log("File:::" + JSON.stringify(this.currentFile.name));

    this.progress = 0;

    const formData: FormData = new FormData();
    formData.append('name', this.category.name);
    formData.append('photo', this.currentFile);
    /*
    this.service.upload(formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = 'archivo cargado';//event.body.message;
          //this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    */
    //this.close();
  }

  //File management
  selectFile(event) {
    //console.log("event:::" + JSON.stringify(event));
    /*
    console.log("event:::" + event);
    const file: File = event.target.files[0];
    console.log("file:::" + JSON.stringify(file));
    */
    //this.selectedFiles = event.target.files;
    //console.log("selectedFiles:::" + JSON.stringify(this.selectedFiles));

    console.log("event:::" + event);
    this.selectedFiles = event.target.files;
    this.currentFile = event.target.files[0];
    const file: File = event.target.files[0];

    if (file) {
      console.log("file:::" + file);
      console.log("this.currentFile:::" + this.currentFile);
      let fileName = file.name;
      console.log("fileName:::" + fileName);
      const formData = new FormData();
      formData.append("thumbnail", file);
      console.log("fileName:::" + fileName);
/*
      const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
      })
      */
    }
  }

  upload() {
    this.progress = 0;
    /*
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
    */
  }
  
  close() {
    this.windowRef.close();
  }

}
