import { NormModel } from "./norm.model";

export interface FractionsModel {
  id?:number;
  code:string;
  level:string;
  description:string;
  parentId:number;
  normId:NormModel|number;
  unit:string;
  clasificationId:number;
  userCreation:string;
  creationDate:Date;
  userModification:string;
  modificationDate:Date;
  version:number;
  relevantTypeId:number;
  codeErp1:string;
  codeErp2:string;
  codeErp3:string;
  decimalAmount:string;
  status:string;
  fractionCode:number;
}
