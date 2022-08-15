import { GoodSsubtype } from "./good-ssubtype.model";
import { GoodSubtype } from "./good-subtype.model";
import { GoodType } from "./good-type.model";

export interface GoodSssubtype {
 
    id?: number;

    descripcion:string;

    no_ssubtipo : number | GoodSsubtype;

    no_subtipo : number | GoodSubtype;
    
    no_tipo : number | GoodType;

    no_registro: number;
    
    no_clasificacion_alterna: number;

    no_clasif_bien: number;
}