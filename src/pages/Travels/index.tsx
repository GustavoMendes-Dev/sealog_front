import React, { useContext } from "react";
import Card from "../../components/Card";
import Tables from "../../components/Tables";
import Wrapper from "../../components/Wrapper";
import { columnsTravelsTable } from "../../constants/columns";
import { TravelsContext } from "../../providers/travelsProvider";

const Travels: React.FC = () => {
  const { travelsList } = useContext(TravelsContext);
  return (
    <>
      <Wrapper title="Viagens">
        <Card>
          <Tables data={travelsList} columns={columnsTravelsTable} />
        </Card>
      </Wrapper>
    </>
  );
};

export default Travels;
