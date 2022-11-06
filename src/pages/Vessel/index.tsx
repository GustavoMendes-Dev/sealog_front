import React from 'react';
import Card from '../../components/Card';
import Tables from '../../components/UI/Tables';
import Wrapper from '../../components/UI/Wrapper';
import { columnsVesselTable } from '../../constants/columns';

const Vessel: React.FC = () => {

  const data = [
    {
      title: "X",
      name: "X",
      value: "X",
    },
    {
      title: "X",
      name: "X",
      value: "X",
    },
    {
      title: "X",
      name: "X",
      value: "X",
    },
    {
      title: "X",
      name: "X",
      value: "X",
    },
  ]
  return (
    <Wrapper title='Embarcação X'>
      <Card>
        <Tables data={data} columns={columnsVesselTable} />
      </Card>
    </Wrapper>
  );
}

export default Vessel;