import React from "react";
import "./CustomSvg.css";

interface CustomSvgIconProps {
  iconName: string;
  width?: React.CSSProperties['width'];
  className?: string;
}

const CustomSvgIcon: React.FC<CustomSvgIconProps> = ({ iconName, width, className }) => {
  return (
    <span className={`custom-icon ${className ?? ""}`} style={{ width }}>
      <img
        // src={`${Liferay.ThemeDisplay.getPathThemeImages()}/${iconName}.svg`}
        alt={iconName} // Add alt attribute for accessibility
      />
    </span>
  );
};

export default CustomSvgIcon;
