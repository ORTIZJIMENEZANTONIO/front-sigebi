export class ParagraphsModel {
  id:number;
  creationDate:Date;
  modificationDate:Date;
  userCreation:string;
  userModification: string; 
  version: number;
  paragraph:string;
  reportName:string;
  constructor(
    id: number, creationDate:Date, modificationDate:Date, userCreation:string, userModification: string,
    version: number, paragraph: string, reportName: string
    ){
    this.id = id;
    this.userCreation = userCreation;
    this.creationDate = creationDate;
    this.userModification = userModification;
    this.modificationDate = modificationDate;
    this.version = version;
    this.paragraph = paragraph;
    this.reportName = reportName;
  }
}
