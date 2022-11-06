import React from "react";

export const IconToggleSidebar: React.FC = () => {
  return (
    <span className="svg-icon svg-icon-1 rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
          fill="white"
        ></path>
        <path
          d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
          fill="white"
        ></path>
      </svg>
    </span>
  );
};

export const IconDashBoard: React.FC = () => {
  return (
    <span className="menu-icon">
      <span className="svg-icon svg-icon-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
        >
          <rect x="2" y="2" width="9" height="9" rx="2" fill="white"></rect>
          <rect
            opacity="0.3"
            x="13"
            y="2"
            width="9"
            height="9"
            rx="2"
            fill="white"
          ></rect>
          <rect
            opacity="0.3"
            x="13"
            y="13"
            width="9"
            height="9"
            rx="2"
            fill="white"
          ></rect>
          <rect
            opacity="0.3"
            x="2"
            y="13"
            width="9"
            height="9"
            rx="2"
            fill="white"
          ></rect>
        </svg>
      </span>
    </span>
  );
};

export const IconSearch: React.FC = () => {
  return (
    <span className="svg-icon svg-icon-1 position-absolute ms-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          opacity="0.5"
          x="17.0365"
          y="15.1223"
          width="8.15546"
          height="2"
          rx="1"
          transform="rotate(45 17.0365 15.1223)"
          fill="white"
        ></rect>
        <path
          d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
          fill="white"
        ></path>
      </svg>
    </span>
  );
};

export const IconBars = () => {
  return (
    <span className="svg-icon svg-icon-primary svg-icon-3x ms-n1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black"></rect>
        <rect
          opacity="0.5"
          x="13"
          y="5"
          width="3"
          height="14"
          rx="1.5"
          fill="black"
        ></rect>
        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black"></rect>
        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black"></rect>
      </svg>
    </span>
  );
};
