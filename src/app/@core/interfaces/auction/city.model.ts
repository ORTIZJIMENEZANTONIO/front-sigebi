import { Delegation } from "./Delegation.model";
import { Subdelegation } from "./subdelegation.model";

export interface City{
    id?: number;
    name : string

    cityCode:string;

    numDelegation : Delegation|number;

    numSubDelegation: Subdelegation|number;

    legendOffice : string

    numRegister: number; 
}