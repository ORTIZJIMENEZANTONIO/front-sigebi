import { GoodType } from "./good-type.model";

export interface GoodSubtype {

     
  id?: number;

  description: string;

  no_tipo: number | GoodType;

  no_registro: number;

    
}