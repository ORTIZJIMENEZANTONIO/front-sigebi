import { GoodType } from "./good-type.model";

export interface GoodsSubtype {
  id: number;
  idGoodType: number;
  nameGoodSubtype: number;
  userCreation: string;
  creationDate: Date;
  userModification: string;
  modificationDate: Date;
  numberPhotographs: number;
  descFotographs: string
  version: number;
}