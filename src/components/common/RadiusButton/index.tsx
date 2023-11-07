import React from 'react';
import { Button } from './style';

interface ButtonProps {
  isDisabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
  textColor?: string;
}

export const RadiusButtonComponent: React.FC<ButtonProps> = (props) => {
  const { isDisabled, onClick, children, textColor } = props;

  return (
    <Button
      $isDisabled={isDisabled}
      $textColor={textColor}
      aria-disabled={isDisabled}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
};
