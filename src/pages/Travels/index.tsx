import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import Travel from "../../components/Travel";
import Wrapper from "../../components/UI/Wrapper";
import { TravelsContext } from "../../providers/travelsProvider";
import { getTravelAll } from "../../services/basic-rest/travels";
import { ITravelsDto } from "../../types/travels";

const Travels: React.FC = () => {
  const { setTravelsList, travelsList } = useContext(TravelsContext);

  const {
    data: dataTravels, 
    isLoading,
    error,
  } = useQuery(`travelList_${'1'}`, () => getTravelAll('1'), {
    // cacheTime: 10,
    refetchOnWindowFocus: false,
  });
  
  console.log(travelsList)

  useEffect(() => {
    setTravelsList(dataTravels as ITravelsDto[]);
  }, [dataTravels]);

  return (
    <>
      <Wrapper title="Viagens">
        {!isLoading ? 
        travelsList?.sort((a, b) => (a.createdAt < b.createdAt) ? -1 : 1).map((travel: ITravelsDto) => {
          return <Travel title={String(travel.createdAt)} id={travel.id} data={travel.routes} />;
        }) : 
        "Carregando..."
      }
      </Wrapper>
    </>
  );
};

export default Travels;
