import { WarehouseInterface } from "./warehouse.model";
import { Batch } from "./batch.model";

export class RackInterface {
  
  id: number;
  idWarehouse: WarehouseInterface;
  idBatch: Batch;
  description: string;
  status: string;
  registerNumber: number | null;

}