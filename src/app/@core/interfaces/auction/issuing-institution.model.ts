import { City } from "./City.model";
import { InstitutionClassification } from "./institution-classification.model";
import { TransferentesInterface } from "./transferentes.model";

export interface IssuingInstitution {

    no_clasificacion:number ;

    numCity:number | City;


    numTransference:number | TransferentesInterface;

    id?: number;
    

    name : string
    
    description:string;

    manager : string;

    street: string;

    numInside : string

    numExterior: string; 

    cologne : string;

    zipCode:number;

    delegMunic:string;

    phone:string;

    numClasif:number;

    numRegister:number;

}
