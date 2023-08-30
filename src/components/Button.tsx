import React, { ReactNode } from 'react';

interface CustomButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  backgroundColor = 'var(--button-color)',
  textColor = 'var(--primary-color)',
  iconColor = 'white',
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  const iconStyle: React.CSSProperties = {
    backgroundColor: iconColor,
  };

  return (
    <div className="action_button" style={buttonStyle}>
      {text}
      <i className="fa-solid fa-arrow-right" style={iconStyle}></i>
    </div>
  );
};

export default CustomButton;