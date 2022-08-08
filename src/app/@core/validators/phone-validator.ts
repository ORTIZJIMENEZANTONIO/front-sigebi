import { FormControl, AbstractControl , ValidatorFn } from '@angular/forms';

export class PhoneValidator {
    
	static validatePhone = (min: number, max: number): ValidatorFn => {
        let subscribe: boolean = false;
    
        return (dataControl: AbstractControl): {[key: string]: boolean} => {
            if (dataControl.value == undefined){
                return null;
            }
            if (isNaN(min) || isNaN(max) || min < 0 || max<=0 || min>=max) {
                return { 'validatePhone': true };
            }
            
            if(min >0 && dataControl.value.trim()==""){
                return { 'validatePhoneEmpty': true };
            }
            if(dataControl.value.trim().length>max){
              return { 'validatePhoneSize': true };
          }            
          if(dataControl.value !== ""){
            //var re = new RegExp("^([0-9\\-/]{"+min+","+max+"})$");
            var re = new RegExp("^([0-9]{"+min+","+max+"})$");
            try{
                let input = dataControl.value;
                let isValid=re.test(input);
                if(isValid){
                  return null;
                }else{
                  return { validatePhone: true};
                }
            }catch(e){
              return {
                validatePhone: true
              };
            }

          }
          else{
            return null;
          }
        };
      };
}