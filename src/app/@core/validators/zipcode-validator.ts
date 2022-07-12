import { FormControl, AbstractControl , ValidatorFn } from '@angular/forms';

export class ZipcodeValidator {
    
	static validInput = (min: number, max: number): ValidatorFn => {
        let subscribe: boolean = false;
    
        return (dataControl: AbstractControl): {[key: string]: boolean} => {
            if (dataControl.value == undefined){
              return null;
            }
            if (isNaN(min) || isNaN(max) || min < 0 || max<=0 || min>max) {
                return { 'validInput': true };
            }
            
            if(dataControl.value.trim()==""){
                return { 'validInputEmpty': true };
            }
            if(dataControl.value.trim().length>max){
              return { 'validInputSize': true };
          }            
          if(dataControl.value !== ""){
            var re = new RegExp("^([0-9]{"+min+","+max+"})$");
            try{
                let input = dataControl.value;
                let isValid=re.test(input);
                if(isValid){
                  return null;
                }else{
                  return { validInput: true};
                }
            }catch(e){
              return {
                validInput: true
              };
            }

          }
          else{
            return null;
          }
        };
      };
}