import React, { useState } from "react";
import Checkbox from "../UI/Checkbox";

export interface ICheckboxTable {
  row: any;
  name: string;
}

const CheckTable: React.FC<ICheckboxTable> = ({row, name}) => {
  const [ total, setTotal ] = useState(0);
  console.log(total)
  return <Checkbox onClick={setTotal(row)} name={name} />;
};

export default CheckTable;

