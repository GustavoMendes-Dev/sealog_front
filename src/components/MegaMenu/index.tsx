import React, { memo } from "react";
import { Link } from "react-router-dom";

import { menu } from "../../constants/menu";

const MegaMenu: React.FC = () => {
  return (
    <div className="aside-menu flex-column-fluid">
      <div className="hover-scroll-overlay-y my-5 my-lg-5">
        <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500">
          {menu?.map((item, index) => {
            return (
              <div key={index} className="menu-item">
                {item.url !== undefined ? (
                  <Link to={item.url} className="menu-link">
                    {item.icon}
                    <span className="menu-title">{item.title}</span>
                  </Link>
                ) : (
                  <div className="menu-content pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                      {item.title}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(MegaMenu);
