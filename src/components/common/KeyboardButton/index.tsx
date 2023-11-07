import React from 'react';
import { Button } from './style';

interface ButtonProps {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
}

export const KeyboardButtonComponent: React.FC<ButtonProps> = (props) => {
  const { text, isDisabled, onClick } = props;

  return (
    <Button
      $isDisabled={isDisabled}
      onClick={() => !isDisabled && onClick()}
      data-testid={`keyboard-button-component-${text}`}
    >
      {text}
    </Button>
  );
};
