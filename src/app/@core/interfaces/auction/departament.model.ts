import { Delegation } from "./Delegation.model";
import { Subdelegation } from "./subdelegation.model";

export interface Departament{
    id?: number;

    numDelegation : Delegation|number;

    numSubDelegation: Subdelegation|number;

    dsarea : string

    description : string
    
    lastOffice:number;

    numRegister : number;

    level : number;
    
    depend : number;

    depDelegation : number;

    phaseEdo : number;

}