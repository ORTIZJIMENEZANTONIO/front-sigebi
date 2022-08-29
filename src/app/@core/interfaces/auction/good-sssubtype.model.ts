import { GoodSsubtype } from "./good-ssubtype.model";
import { GoodSubtype } from "./good-subtype.model";
import { GoodType } from "./good-type.model";

export interface GoodSssubtype {
 
    id?: number;

    description:string;

    numSsubType : number | GoodSsubtype;

    numSubType : number | GoodSubtype;
    
    numType : number | GoodType;

    numRegister: number;
    
    numClasifAlterna: number;

    numClasifGoods: number;
}