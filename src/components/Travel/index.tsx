import React from 'react';
import { columnsTravelsTable } from '../../constants/columns';
import { IButtons } from '../../types/buttons';
import Card from '../Card';
import Tables from '../UI/Tables';

export interface ITravel {
  id?: number;
  title:string;
  data: any;
}

const Travel: React.FC<ITravel> = ({data, title, id}) => {

  const button: IButtons = {
    title: "Visualizar",
    type: "link",
    action: `/travels/${id}`,
  };

  return <>
    <Card title={title} button={button} >
      <Tables data={data} columns={columnsTravelsTable} paginate={false} />
    </Card>
    </>;
}

export default Travel;