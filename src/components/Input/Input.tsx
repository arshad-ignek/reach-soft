import React, { InputHTMLAttributes } from "react";
import "./Input.css";
import { useField } from "formik";
import { browserName } from "react-device-detect";
import CustomSvgIcon from "../CustomIcon/CustomSvg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  isInvalid?: boolean;
  place?: boolean;
  placeHolder?: string;
  disable?: boolean;
  maxlength?: number;
  props:any;
}

const Input: React.FC<InputProps> = ({
  label,
  required,
  isInvalid,
  place,
  placeHolder,
  id,
  disable,
  maxlength,
  ...props
}) => {
  // const [field, meta] = useField(props);

  return (
    <>
      <div
        className={`inputContainer `}
      >
        <input
          autoComplete="off"
          // placeHolder={label}
          className={`form-control `}
          // required={required ? "required" : undefined}
          disabled={disable}
          maxLength={maxlength}
          // {...field}
          {...props}
        />
        {place === true ? (
          <label className="floatLabel" htmlFor={id}>
            {placeHolder} {required && <span>*</span>}
          </label>
        ) : (
          <label className="floatLabel" htmlFor={id}>
            {label} {required && <span>*</span>}
          </label>
        )}
        {(props.type === "date" && browserName !== "Firefox") && (
          <span className="calendar">
            <CustomSvgIcon iconName="calendar" />
          </span>
        )}
      </div>

      {/* {meta.touched && meta.error ? (
        <div className="is-danger">{meta.error}</div>
      ) : null} */}
    </>
  );
};

export default Input;
