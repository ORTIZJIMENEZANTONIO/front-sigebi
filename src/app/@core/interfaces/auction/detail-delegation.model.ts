import { Delegation } from './delegation.model';

export interface DetailDelegation{
    id?: number;
    name : string
    numDelegation: Delegation;
    area : string;
    position : string;
    location : string;
    address : string;
    mail: string;
    numP1 : number
    numP2 : number
    numP3 : number
}