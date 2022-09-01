import { SaveValues } from "./save-values.model";

export interface BatteryInterface {
  
  idBattery: number | null;
  storeCode: SaveValues;
  description: string;
  status: string;
  registerNumber: number | null;

}