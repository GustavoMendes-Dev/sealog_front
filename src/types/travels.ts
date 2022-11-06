export interface ITravelsDto {
  id?: number;
  name: string;
  date: Date;
  phone: string;
  actions?: any;
  paths: any;
}
export interface IPathsDto {
  id: number;
  name: string;
  origin: string;
  destination: string;
  distance: string;
  departure: string;
  cost: string;
  arrival: string;
  actions: any;
}
