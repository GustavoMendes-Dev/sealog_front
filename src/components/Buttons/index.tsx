import React from "react";

export type IButton = {
  label: string;
  loading?: boolean;
  type: "primary" | "light";
  className?: string;
  w?: string;
};

export const Button: React.FC<IButton> = ({
  label,
  loading,
  type,
  className,
  w,
}) => {
  return (
    <button
      type="submit"
      className={`btn btn-lg btn-${type} w-${w} mb-5 ${
        loading ? "disabled " : ""
      }${className ?? ""}`}
    >
      {loading ? (
        <>
          Carregando...
          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
        </>
      ) : (
        <span className="indicator-label">{label}</span>
      )}
    </button>
  );
};
