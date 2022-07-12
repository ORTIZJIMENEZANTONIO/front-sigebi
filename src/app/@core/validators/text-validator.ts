import { FormControl, AbstractControl , ValidatorFn } from '@angular/forms';

export class TextValidator {
    
	static validInput = (min: number, max: number): ValidatorFn => {
        let subscribe: boolean = false;
    
        return (dataControl: AbstractControl): {[key: string]: boolean} => {
            //if (dataControl.value == undefined || isNaN(min) || isNaN(max) || min < 0 || max<=0 || min>=max) {
            if (dataControl.value == undefined){
              return null;
            }
            if (isNaN(min) || isNaN(max) || min < 0 || max<=0 || min>=max) {
                return { 'validInput': true };
            }
            
            if(min >0 && dataControl.value.trim()==""){
                return { 'validInputEmpty': true };
            }
            if(dataControl.value.trim().length>max){
              return { 'validInputSize': true };
          }            
          if(dataControl.value !== ""){
            var re = new RegExp("^([a-zA-Z0-9áéíóúÁÉÍÓÚñÑ@\\s\\.,_\\-¿?\\\\/()%$#¡!|]{"+min+","+max+"})$");
            try{
                let input = dataControl.value;
                let isValid=re.test(input);
                if(isValid){
                  return null;
                }else{
                  return { validInput: true};
                }
                /*
                if(!isValid){
                  return { validInput: isValid} 
                }
                else{
                    return null;
                }*/
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