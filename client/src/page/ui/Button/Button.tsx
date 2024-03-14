/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React, { type ButtonHTMLAttributes, type FC } from 'react';

import './Button.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  DELETE = 'delete',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, theme, ...otheProps } = props;
  return (
    <button type="button" className={`Button ${theme}`} {...otheProps}>
      {children}
    </button>
  );
};
