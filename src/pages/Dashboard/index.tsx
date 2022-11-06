import React from "react";

import CardIndicators from "../../components/CardIndicators";
import Wrapper from "../../components/UI/Wrapper";

import { indicators } from "../../constants/indicators";

const Dashboard: React.FC = () => {
  return (
    <>
      <Wrapper title="Painel">
        <div className="row g-5 g-xl-8">
          {indicators?.map((item) => {
            return (
              <CardIndicators
                type={item.type}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default Dashboard;
