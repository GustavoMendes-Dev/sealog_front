import React from "react";
import { Link } from "react-router-dom";
import { IconSearch } from "../../Icons";

export type ICard = {
  children: React.ReactNode;
  button?: any;
  input?: any;
  title?: string;
};

const Card: React.FC<ICard> = ({ children, button, input, title }) => {
  return (
    <div className="card card-flush">
      <div
        className={`card-header ${
          title ? "border-0" : "align-items-center py-5 gap-2 gap-md-5"
        } `}
      >
        <div className="card-title m-0">
          <div className="d-flex align-items-center position-relative my-1">
            {title && <h3 className="fw-bolder m-0">{title}</h3>}
            {input && (
              <>
                <IconSearch />
                <input
                  type="text"
                  className="form-control form-control-solid w-250px ps-14"
                  placeholder={input.placeholder}
                  onChange={(e) => input.onChange(e.target.value)}
                  value={input.value}
                />
              </>
            )}
          </div>
        </div>
        <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
          <div className="w-100 mw-150px"></div>
          {button && (
            <Link to={button.action} className="btn btn-primary">
              {button.title}
            </Link>
          )}
        </div>
      </div>
      <div className={`card-body ${title ? "border-top p-9" : "pt-0"} `}>
        {children}
      </div>
    </div>
  );
};

export default Card;
