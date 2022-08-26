import { GoodSubtype } from "./good-subtype.model";
import { GoodType } from "./good-type.model";

export interface GoodSsubtype {
    id?: number;
    description:string;
    numSubType : number|GoodSubtype;
    numType : number|GoodType;
    numRegister: number; 
}