import React, { ReactNode } from "react";

interface CustomButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
  iconBackgroundColor?: string;
  width?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  backgroundColor = "var(--button-color)",
  textColor = "var(--primary-color)",
  iconColor = "white",
  iconBackgroundColor = 'var(--primary-color)',
  width = "24%",
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
    width: width
  };

  const iconStyle: React.CSSProperties = {
    backgroundColor: iconBackgroundColor,
    color: iconColor
  };

  return (
    <div className="action_button" style={buttonStyle}>
      {text}
      <i className="fa-solid fa-arrow-right" style={iconStyle}></i>
    </div>
  );
};

export default CustomButton;
