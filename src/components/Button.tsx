import React from 'react';
import classNames from 'classnames';
import './Button.less';

export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  type = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  onClick,
  className,
}: ButtonProps) {
  const buttonClassName = classNames('button', {
    [`button--${type}`]: true,
    [`button--${size}`]: true,
    'button--disabled': disabled,
    'button--full-width': fullWidth,
  }, className);

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
