import { AbstractControl, ValidatorFn } from '@angular/forms';
import libphonenumber from 'google-libphonenumber';

export class PhoneCountryValidator {

   static validCountryPhone = (countryCode : String): ValidatorFn => {

   return (phoneControl: AbstractControl): {[key: string]: boolean} => {
    console.log('PhoneValidator::phoneControl::' + phoneControl);
     if(phoneControl.value !== ""){
       try{
         const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
         let phoneNumber = "" + phoneControl.value + "",
             region = 'MX',
             number = phoneUtil.parse(phoneNumber, region),
             isValidNumber = phoneUtil.isValidNumber(number);
        console.log('PhoneValidator::isValidNumber::' + isValidNumber);
         if(isValidNumber){
           return null;
         }
       }catch(e){
         return {
           validCountryPhone: true
         };
       }
       return {
         validCountryPhone: true
       };
     }
     else{
       return null;
     }
   };
 };
}