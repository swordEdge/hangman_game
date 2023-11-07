import React from 'react';
import { Letter } from './style';

interface LetterProps {
  char: string;
  isBlank: boolean;
}

export const LetterComponent: React.FC<LetterProps> = (props) => {
  const { char, isBlank } = props;

  return (
    <Letter $isBlank={true} data-testid={`letter-component-${char}`}>
      {isBlank ? '_' : char}
    </Letter>
  );
};
