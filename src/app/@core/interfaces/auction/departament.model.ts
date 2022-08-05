import { Delegation } from "./Delegation.model";
import { Subdelegation } from "./subdelegation.model";

export interface Departament{
    id?: number;

    no_delegacion : Delegation|number;

    no_subdelegacion: Subdelegation|number;

    dsarea : string

    descripcion : string
    
    ultimo_oficio:number;

    no_registro : number;

    nivel : number;

    depend : number;

    dep_delegacion : number;

    etapa_edo : number;

}