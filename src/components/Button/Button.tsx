import React, { MouseEventHandler, ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  styleType: string;
  otherClass?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  label: any;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  disable?: boolean;
  otherChild?: ReactNode;
  onMouseOver?: MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  styleType,
  otherClass,
  onClick,
  label,
  type = 'button',
  style,
  disable,
  otherChild,
  onMouseOver,
  onMouseOut,
}) => {
  return (
    <>
      <button
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        type={type}
        className={`custom-btn btn-${styleType} ${otherClass ? otherClass : ''}`}
        onClick={onClick}
        style={{
          ...style,
        }}
        disabled={disable ?? false}
      >
        {otherChild}
        {label}
      </button>
    </>
  );
};

export default Button;
