import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Tables from "../../components/UI/Tables";
import Wrapper from "../../components/UI/Wrapper";

import { TableColumn } from "react-data-table-component";
import { IPathsDto } from "../../types/travels";

interface ParamTypes {
  id: string;
}

const TravelShow: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [ total, setTotal ] = useState<IPathsDto>();

  const handleTotal = (row: IPathsDto) => {
    setTotal(row);
  }

  const data = [
    {
      id: 1,
      name: "Rota 1",
      origin: "P-12",
      destination: "P-10",
      departure: "20/10/2022 - 12:10",
      arrival: "20/10/2022 - 12:10",
      cost: 120.0,
    },
    {
      id: 2,
      name: "Rota 2",
      origin: "P-12",
      destination: "P-10",
      departure: "20/10/2022 - 12:10",
      arrival: "20/10/2022 - 12:10",
      cost: 120.0,
    },
    {
      id: 3,
      name: "Rota 3",
      origin: "P-12",
      destination: "P-10",
      departure: "20/10/2022 - 12:10",
      arrival: "20/10/2022 - 12:10",
      cost: 120.0,
    },
  ];

  const columnsTravelsTable: TableColumn<IPathsDto>[] = [
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
      cell: (row) => (
        <input onClick={() => handleTotal(row)} name="id" type="radio"></input>
      ),
    },
  ];

  return (
    <Wrapper title="Viagem 20/10/2022 US$">
      <Card title="Rota 1">
        <Tables data={data} columns={columnsTravelsTable} />
      </Card>
      <Card title="Rota 2">
        <Tables data={data} columns={columnsTravelsTable} />
      </Card>
    </Wrapper>
  );
};

export default TravelShow;
