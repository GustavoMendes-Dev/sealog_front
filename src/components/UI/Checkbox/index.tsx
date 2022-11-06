import React from "react";

export interface ICheckbox {
  onClick: any
  name: string;
}

const Checkbox: React.FC<ICheckbox> = ({ onClick, name }) => {
  return <input onClick={onClick} name={name} type="radio"></input>;
};

export default Checkbox;
