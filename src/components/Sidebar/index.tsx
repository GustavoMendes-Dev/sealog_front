import React, { memo, useCallback, useEffect, useState } from "react";
import Brand from "../../assets/Brand";
import { IconToggleSidebar } from "../../Icons";
import MegaMenu from "../MegaMenu";

import "./style.scss";

const Sidebar: React.FC = () => {
  const [toogle, setToogle] = useState("off");

  useEffect(() => {
    document.body.setAttribute("data-kt-aside-minimize", toogle);
  }, [toogle])

  const handleSidebar = useCallback(() => {
    toogle === "on" ? setToogle("off") : setToogle("on");
  },[toogle]);

  return (
    <div className="aside aside-dark aside-hoverable">
      <div className="aside-logo flex-column-auto">
        <Brand /> 
        <div
          onClick={handleSidebar}
          className={`btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle ${
            toogle === "on" ? "active" : ""
          }`}
        >
          <IconToggleSidebar />
        </div>
      </div>
      <MegaMenu />
    </div>
  );
};

export default memo(Sidebar);
