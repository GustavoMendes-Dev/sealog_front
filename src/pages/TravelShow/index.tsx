import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import Tables from "../../components/UI/Tables";
import Wrapper from "../../components/UI/Wrapper";

import { TableColumn } from "react-data-table-component";
import { IRoutesDto, ITravelsDto } from "../../types/travels";
import { useQuery } from "react-query";
import { getTravelById } from "../../services/basic-rest/travels";
import Tag from "../../components/UI/Tag";

interface ParamTypes {
  id: string;
}

const TravelShow: React.FC = () => {
  const { id } = useParams<ParamTypes>();
  const [total, setTotal] = useState<IRoutesDto>();
  const [travel, setTravel] = useState<ITravelsDto>();

  const handleTotal = (row: IRoutesDto) => {
    setTotal(row);
  };

  const {
    data: dataTravel,
    isLoading,
    error,
  } = useQuery(`travelList_${id}`, () => getTravelById(id), {
    // cacheTime: 10,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setTravel(dataTravel as ITravelsDto);
  }, [dataTravel]);

  const columnsTravelsTable: TableColumn<IRoutesDto>[] = [
    {
      name: "Nome",
      selector: (row) => row.name,
      sortable: true,
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
      selector: (row) => row.distance,
      sortable: true,
    },
    {
      name: "Tag",
      cell: (row) => (
        <Tag title={row.tag} type="danger" />
      ),
    },
    {
      button: true,
      cell: (row) => (
        <input className="form-check-input" onClick={() => handleTotal(row)} name="id" type="radio"></input>
      ),
    },
  ];

  const options = [
    {
      name: "Rota 1",
      distance: "12 km",
      originDatetime: "20/12/2022",
      destinationDatetime: "20/12/2022",
      tag: "Melhor distância",
    },
    {
      name: "Rota 1",
      distance: "12 km",
      originDatetime: "20/12/2022",
      destinationDatetime: "20/12/2022",
      tag: "Mais econômica",
    },
    {
      name: "Rota 1",
      distance: "12 km",
      originDatetime: "20/12/2022",
      destinationDatetime: "20/12/2022",
    },
  ]

  return (
    <Wrapper title={String(travel?.createdAt)}>
      {travel?.routes?.map((item) => {
        return (
          <Card title={item.name} button={{title: "Teste", action: "/"}}>
            <Tables data={options} columns={columnsTravelsTable} />
          </Card>
        );
      })}
    </Wrapper>
  );
};

export default TravelShow;
