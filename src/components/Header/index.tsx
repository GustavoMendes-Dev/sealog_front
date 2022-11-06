import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import Select from "../UI/Select ";
import { AppContext } from "../../providers/appProvider";
import { FormHandles } from "@unform/core";

export type IHeader = {
  title: string;
};

const Header: React.FC<IHeader> = ({ title }) => {
  const formRef = useRef<FormHandles | null>(null);
  const { vessels } = useContext(AppContext);
  const [listVessel, setListVessel] = useState<any | null>();

  useEffect(() => {
    const options = vessels?.map((item) => {
      return {
        value: item.id,
        label: item.name,
      };
    });
    setListVessel(options);
  }, [vessels]);


  return (
    <div className="header align-items-stretch">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className="d-flex align-items-center d-lg-none ms-n2 me-2"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_aside_mobile_toggle"
          >
            <span className="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="black"
                ></path>
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="black"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
          <a href="../../demo1/dist/index.html" className="d-lg-none">
            {/* <img alt="Logo" src="assets/media/logos/logo-2.svg" className="h-30px"> */}
          </a>
        </div>
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-center" id="kt_header_nav">
            <div className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
              <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">
                {title}
              </h1>
              <span className="h-20px border-gray-300 border-start mx-4"></span>
              {/* <Link
                to={{
                  pathname: `teste`,
                }}
                target="_blank"
                className="breadcrumb-item text-dark"
              >
                Embarcação Horizonte 2
              </Link> */}
              <Form
                onSubmit={() => {
                  console.log(`dasdas`);
                }}
                ref={formRef}
              >
                <Select name="vessel" options={listVessel} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
