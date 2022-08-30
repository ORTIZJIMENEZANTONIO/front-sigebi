import { OfficesModel } from "./offices.model";

export interface LawyerInterface {

  id: number | null;
  idOffice: OfficesModel;
  name: string;
  street: string | null;
  streetNumber: string | null;
  apartmentNumber: string | null;
  suburb: string | null;
  delegation: string | null;
  zipCode: number | null;
  rfc: string | null;
  phone: string | null;
  registerNumber: number | null;
  
}