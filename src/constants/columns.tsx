import { TableColumn } from "react-data-table-component";
import CheckTable from "../components/CheckTable";
import { IRoutesDto } from "../types/travels";

export const columnsTravelsTable: TableColumn<IRoutesDto>[] = [
  {
    name: "Nome",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Origem",
    selector: (row) => row.originAddress,
  },
  {
    name: "Destino",
    selector: (row) => row.destinationAddress,
  },
  {
    name: "Partida",
    selector: (row) => row.originDatetime,
  },
  {
    name: "Chegada",
    selector: (row) => row.destinationDatetime,
    sortable: true,
  },
  {
    name: "Distância",
    selector: (row) => row.distance + ' km',
    sortable: true,
  },
  // {
  //   name: "Custo",
  //   selector: (row) => row.distance,
  // },
  // {
  //   button: true,
  //   cell: (row) => <input onClick={() =>  console.log(row)} name="id" type="radio"></input>
  // },
];

export const columnsVesselTable: TableColumn<any>[] = [
  {
    name: "Nome",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Origem",
    selector: (row) => row.name,
  },
  {
    name: "Destino",
    selector: (row) => row.value,
  },
];
