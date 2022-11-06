import React from "react";
import Card from "../Card";

export interface ICardIndicator {
  type?: string;
  name: string;
  description: string;
  icon?: JSX.Element;
}

const CardIndicators: React.FC<ICardIndicator> = ({
  type,
  name,
  description,
  icon,
}) => {
  return (
    <div className="col-xl-3">
      <Card>
        {icon ? (
          icon
        ) : (
          <div className={`progress h-7px bg-${type} bg-opacity-50 mt-7`}>
            <div className={`progress-bar bg-${type}`}></div>
          </div>
        )}
        <div className="text-gray-900 fw-bolder fs-2 mb-2 mt-5">{name}</div>
        <div className="fw-bold text-gray-400">{description}</div>
      </Card>
    </div>
  );
};

export default CardIndicators;
