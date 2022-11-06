import React, { useContext } from "react";
import Travel from "../../components/Travel";
import Wrapper from "../../components/UI/Wrapper";
import { TravelsContext } from "../../providers/travelsProvider";
import { ITravelsDto } from "../../types/travels";

const Travels: React.FC = () => {
  const { travelsList } = useContext(TravelsContext);
  return (
    <>
      <Wrapper title="Viagens">
        {travelsList.sort((a, b) => (a.date < b.date) ? -1 : 1).map((travel: ITravelsDto) => {
          return <Travel title={travel.name + ' - ' + travel.date} data={travel.paths} />;
        })}
      </Wrapper>
    </>
  );
};

export default Travels;
