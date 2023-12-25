import React from 'react';
import "./Input.css";
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface InputProps {
  label: string;
  required?: boolean;
  isInvalid?: boolean;
  place?: boolean;
  validate?: boolean;
  password?: string;
  placeHolder?: string;
  disable?: boolean;
  maxlength?: number;
  register: UseFormRegister<FieldValues>;
  id?: string;
  name: any;
  type:any;
}

const Input: React.FC<InputProps> = ({
  label,
  required,
  isInvalid,
  place,
  placeHolder,
  password,
  validate,
  id,
  disable,
  maxlength,
  register,
  name,
  type
}) => {
  return (
    <>
      <div className={`inputContainer`}>
        <input
          autoComplete="off"
          placeholder={label}
          className={`form-control`}
          required={required ? true : undefined}
          disabled={disable}
          maxLength={maxlength}
          type={type}
          {...register(name, { required: required && `${label} is required`, validate: (value) => {
              if (password && name === 'reEnterPassword' && value !== password) {
                return 'Passwords must match';
              }
              return true;
            }})}
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
       
      </div>

      {isInvalid && <div className="is-danger">Invalid input</div>}
    </>
  );
};

export default Input;

