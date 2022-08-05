import { City } from "./City.model";

export interface Minpub{
    id?: number;

    descripcion:string;

    responsable:string;

    calle: string;

    no_interior: string;

    no_exterior: string;

    colonia: string;

    codigo_postal : number;

    deleg_munic : string

    no_ciudad: number | City; 

    telefono : string

    no_registro: number; 
    

}