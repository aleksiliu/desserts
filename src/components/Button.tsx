// src/components/Button.tsx

import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  color = 'primary',
}) => {
  const baseStyle = `text-black border border-slate-500 px-6 py-4 rounded-full flex items-center shadow ${className}`;
  const colorStyles = {
    primary: `bg-white hover:bg-white-500`,
    secondary: `bg-indigo-400 hover:bg-indigo-500`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${colorStyles[color]}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
