import { Delegation } from "./Delegation.model";
import { Subdelegation } from "./subdelegation.model";

export interface City{
    id?: number;
    nombre : string

    cve_entfed:string;

    no_delegacion : Delegation|number;

    no_subdelegacion: Subdelegation|number;

    leyenda_oficio : string

    no_registro: number; 
}