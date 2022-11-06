import React from "react";

export interface ITag {
  title: string;
  type: string;
}

const Tag: React.FC<ITag> = ({title, type}) => {
  return (
    <>
      <span className={`badge badge-light-${type} fs-8 fw-bolder`}>{title}</span>
    </>
  );
};

export default Tag;
