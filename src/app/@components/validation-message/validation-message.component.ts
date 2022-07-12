/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component, Input, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ngx-validation-message',
  styleUrls: ['./validation-message.component.scss'],
  template: `
      <div class="warning">
          <span class="caption status-danger"
             *ngIf="showMinLength"> {{ label }}: longitud mínima es {{ minLength }} caracter(es) </span>
          <span class="caption status-danger"
             *ngIf="showMaxLength"> {{ label }}: longitud máxima es {{ maxLength }} caracter(es) </span>
          <span class="caption status-danger" *ngIf="showPattern"> {{ label }}: Contiene caracteres incorrectos</span>
          <span class="caption status-danger" *ngIf="showRequired"> {{ label }}: es requerido</span>
          <span class="caption status-danger" *ngIf="showMin">Valor mínimo de {{ label }} es {{ min }}</span>
          <span class="caption status-danger" *ngIf="showMax">Valor máximo de {{ label }} es {{ max }}</span>
      </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxValidationMessageComponent),
      multi: true,
    },
  ],
})
export class NgxValidationMessageComponent {
  @Input()
  label: string = '';

  @Input()
  showRequired?: boolean;

  @Input()
  min?: number;

  @Input()
  showMin?: boolean;

  @Input()
  max?: number;

  @Input()
  showMax: boolean;

  @Input()
  minLength?: number;

  @Input()
  showMinLength?: boolean;

  @Input()
  maxLength?: number;

  @Input()
  showMaxLength?: boolean;

  @Input()
  showPattern?: boolean;
}
