export interface ITravelsDto {
  id?: number;
  createdAt: Date;
  updatedAt: Date;
  ship: any;
  actions?: any;
  routes: IRoutesDto[];
}
export interface IRoutesDto {
  id: number;
  name: string;
  originAddress: string;
  originDatetime: string;
  destinationAddress: string;
  destinationDatetime: string;
  distance: string;
  actions: any;
  tag: string;
}
