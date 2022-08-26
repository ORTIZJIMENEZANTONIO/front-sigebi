import { QuestionInterface } from "./question.model";

export interface ResponseInterface {
  
  id: number;
  idQuestion: QuestionInterface;
  text: string | null;
  startValue: number | null;
  endValue: number | null;
  registerNumber: number | null;

}