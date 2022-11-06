import { TableColumn } from "react-data-table-component";
import CheckTable from "../components/CheckTable";
import { IPathsDto } from "../types/travels";

export const columnsTravelsTable: TableColumn<IPathsDto>[] = [
  {
    name: "Nome",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Origem",
    selector: (row) => row.origin,
  },
  {
    name: "Destino",
    selector: (row) => row.destination,
  },
  {
    name: "Partida",
    selector: (row) => row.departure,
  },
  {
    name: "Chegada",
    selector: (row) => row.arrival,
    sortable: true,
  },
  {
    name: "Distância",
    selector: (row) => row.distance,
    sortable: true,
  },
  {
    name: "Custo",
    selector: (row) => row.cost,
  },
  {
    button: true,
    cell: (row) => <input onClick={() =>  console.log(row)} name="id" type="radio"></input>
  },
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
