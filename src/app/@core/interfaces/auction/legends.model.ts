export class LegendsModel {
  id:number;
  legend:string;
  userCreation:string;
  creationDate:Date;
  userModification: string; 
  modificationDate:Date;
  version: number;
  status: number; 
  constructor(
    id: number, legend:string, userCreation:string, creationDate:Date, userModification: string,modificationDate:Date,
    version: number, status: number
    ){
    this.id = id;
    this.legend = legend;
    this.userCreation = userCreation;
    this.creationDate = creationDate;
    this.userModification = userModification;
    this.modificationDate = modificationDate;
    this.version = version;
    this.status = status;
  }
}
