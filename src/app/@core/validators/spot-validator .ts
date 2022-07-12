import { FormControl } from '@angular/forms';
 
export class SpotValidator {
 
    static isValid(control: FormControl): any {

        if(control.value == ""){
            return null
        }
        
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
 
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            };
        }

        if (control.value > 260 ){ 
            return {
                "too high": true
            };
        }
    
        if (control.value < 31 ){ //this allows for test parking spots during validation.
            return {
                "too low": true
            };
        }

        return null;
    }
 
}