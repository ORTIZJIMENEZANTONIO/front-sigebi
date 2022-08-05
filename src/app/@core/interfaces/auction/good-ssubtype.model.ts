import { GoodSubtype } from "./good-subtype.model";
import { GoodType } from "./good-type.model";

export interface GoodSsubtype {
    id?: number;
    descripcion:string;
    no_subtipo : number|GoodSubtype;
    no_tipo : number|GoodType;
    no_registro: number; 
}