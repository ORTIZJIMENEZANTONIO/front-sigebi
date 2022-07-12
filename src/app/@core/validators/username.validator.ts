import { FormControl } from '@angular/forms';
export class UsernameValidator {
  static validUsername(fc: FormControl){
    if(fc.value === "abc123" || fc.value === "123abc"){
      return ({validUsername: true});
    } else {
      return (null);
    }
  }
}