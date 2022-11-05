import { TableColumn } from "react-data-table-component";
import { ITravelsDto } from "../types/travels";

export const columnsTravelsTable: TableColumn<ITravelsDto>[] = [
  {
    name: "Nome",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Documento",
    selector: (row) => row.document,
  },
  {
    name: "Telefone",
    selector: (row) => row.phone,
  },
  {
    name: "Ações",
    selector: (row) => row.actions,
    width: "100px",
  },
];