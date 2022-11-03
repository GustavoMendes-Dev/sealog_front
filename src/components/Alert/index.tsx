import React, { useContext, useEffect } from "react";
import { AppContext } from "../../providers/appProvider";

import "./style.scss";

export type IAlert = {
  type: string;
  title?: string;
  icon?: string;
  message: string;
  close?: () => void;
};

const Alert: React.FC<IAlert> = ({ type, title, icon, message, close }) => {
  const { setAlertMessage } = useContext(AppContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessage(null)
    }, 3000);
    return () => clearTimeout(timer);
  }, [setAlertMessage]);

  return (
    <div
      className={`alert alert-${type} alert-dismissible d-flex flex-column flex-sm-row p-5 mb-10`}
    >
      <div className="d-flex flex-column">
        {title && <h4 className="mb-1 text-dark">{title}</h4>}
        <span>{message}</span>
      </div>
      <div className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 ms-sm-auto btn__alert">
        <span onClick={() => setAlertMessage(null)} className="svg-icon svg-icon-2x svg-icon-light">
          x
        </span>
      </div>
    </div>
  );
};

export default Alert;
