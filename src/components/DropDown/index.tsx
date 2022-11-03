import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export interface IDropDrow {
  menu?: any;
  header?: React.ReactNode;
  options: IOptions[];
}

export interface IOptions {
  title?: string;
  url?: string;
  onClick?: any;
  separator?: any;
}

const DropDown: React.FC<IDropDrow> = ({ menu, header, options }) => {
  const container = useRef<HTMLDivElement>(null);
  const [showDrop, setShowDrop] = useState<boolean>(false);

  const handleClickOutside = (event: any) => {
    if (container?.current && !container.current.contains(event.target)) {
      setShowDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropUser = () => {
    setShowDrop(!showDrop);
  };

  return (
    <div className="d-flex align-items-stretch flex-shrink-0 action_dropdown" ref={container}>
      <div className="d-flex align-items-center ms-1 ms-lg-3">
        <div
          className={`btn btn-sm btn-icon btn-light btn-active-light-primary me-2 ${showDrop ? 'show menu-dropdown' : ''}`} 
          onClick={handleDropUser}
        >
          {/* {menu} */}
          <span className="svg-icon svg-icon-5 m-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="10" y="10" width="4" height="4" rx="2" fill="black"></rect>
              <rect x="17" y="10" width="4" height="4" rx="2" fill="black"></rect>
              <rect x="3" y="10" width="4" height="4" rx="2" fill="black"></rect>
            </svg>
          </span>
        </div>
        <div
          className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-150px py-4 ${
            showDrop ? "show" : ""
          }`}
          style={{
            position: "absolute",
            zIndex: 9,
            inset: "0px 0px auto auto",
            margin: 0,
            transform: "translate(-60px, 25px)",
          }}
        >
          {header}
          {/* <div className="separator my-2"></div> */}
          {options?.map((item, index) => {
            return (
              <>
                {item.separator && <div className="separator my-2"></div>}
                <div key={index} className="menu-item px-5">
                  {item.url && (
                    <Link to={item.url} className="menu-link px-5">
                      {item.title}
                    </Link>
                  )}
                  {item.onClick && (
                    <div onClick={item.onClick} className="menu-link px-5">
                      {item.title}
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
