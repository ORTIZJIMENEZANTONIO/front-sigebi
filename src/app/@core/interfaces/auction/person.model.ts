import { Delegation } from "./Delegation.model";
import { Subdelegation } from "./subdelegation.model";

export interface Person{
    id?: number;

    nom_persona: string;

    nombre:string;

    calle: string;

    no_exterior: string;

    no_interior: string;

    colonia: string;

    deleg_munic: string;

    codigo_postal: number;

    rfc: string;

    curp: string;

    telefono: string;

    tipo_persona: string;

    tipo_responsable: string;

    representante: string;

    no_escritura: string;

    profesion: string;

    curriculum: string;

    cve_entfed: string;

    cve_giro: string;

    observaciones: string;

    perfil: string;

    antecedentes_secodam: string;

    antecedentes_pgr: string;

    antecedentes_pff: string;

    antecedentes_sera: string;

    antecedentes_otros: string;

    no_registro: number;

    email: string;

    lista_negra: string

}