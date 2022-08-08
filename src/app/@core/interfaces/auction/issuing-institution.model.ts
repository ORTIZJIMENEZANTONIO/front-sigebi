import { City } from "./City.model";
import { InstitutionClassification } from "./institution-classification.model";
import { TransferentesInterface } from "./transferentes.model";

export interface IssuingInstitution {
    id?: number;
    
    nombre : string
    
    descripcion:string;

    responsable : string;

    calle: string;

    no_interior : string

    no_exterior: string; 

    colonia : string;

    codigo_postal:number;

    deleg_munic:string;

    telefono:string;

    no_clasificacion:number | InstitutionClassification;

    no_ciudad:number | City;

    no_registro:number;

    no_transferente:number | TransferentesInterface;
}
