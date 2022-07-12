import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-main',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class MainComponent implements OnInit{
  constructor(private dom: DomSanitizer) { }

  ngOnInit(){

  }
}
