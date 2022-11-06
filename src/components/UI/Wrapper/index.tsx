import React, { memo, useContext } from "react";
import { AppContext } from "../../../providers/appProvider";
import Alert from "../Alert";
import Header from "../../Header";
import Sidebar from "../Sidebar";

import "./style.scss";

export type IWrapper = {
  children: React.ReactNode;
  title: string;
};

const Wrapper: React.FC<IWrapper> = ({ children, title }) => {
  const { alertMessage } = useContext(AppContext);
  return (
    <>
      <Sidebar />
      <div className="wrapper d-flex flex-column flex-row-fluid">
        <Header title={title} />
        <div className="content d-flex flex-column flex-column-fluid">
          <div className="post d-flex flex-column-fluid">
            <div className="container-xxl">
              {alertMessage && <Alert type={alertMessage.type} message={alertMessage.message} />}
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Wrapper);
