import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Link } from "react-router-dom";

export type IInput = {
  name: string;
  label?: string;
  description?: string;
  solid?: boolean;
  help?: {
    label: string;
    url: string;
  };
  type: string;
  required?: boolean;
  onChange?: () => void;
  defaultValue?: any;
};

type InputProps = JSX.IntrinsicElements["input"] & IInput;

export const InputText: React.FC<IInput> = ({
  name,
  label,
  type,
  description,
  solid,
  help,
  required,
  onChange,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      {label && (
        <div className="d-flex flex-stack mb-2">
          <label
            htmlFor={fieldName}
            className={`form-label fs-6 fw-bolder text-dark ${required && 'required'}`}
          >
            {label}
          </label>
          {help && (
            <Link to={help.url} className="link-primary fs-6 fw-bolder">
              {help.label}
            </Link>
          )}
        </div>
      )}

      <input
        id={fieldName}
        onFocus={clearError}
        type={type}
        className={
          solid
            ? error
              ? "form-control form-control-lg form-control-solid is-invalid"
              : "form-control form-control-lg form-control-solid"
            : error
            ? "form-control mb-2 is-invalid"
            : "form-control mb-2"
        }
        ref={inputRef}
        defaultValue={defaultValue}
        onChange={onChange}
        {...rest}
      />
      {/* {description && <div className="text-muted fs-7">{description}</div>} */}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
