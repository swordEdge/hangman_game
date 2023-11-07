import React from 'react';

import { WordContainer, QuoteContainer } from './styles';
import { LetterComponent } from 'components/common';

interface QuoteComponentProps {
  quote: string;
  clickedKeys: string[];
  key?: string;
}

export const QuoteComponent: React.FC<QuoteComponentProps> = (
  props: QuoteComponentProps
) => {
  const { quote, clickedKeys } = props;

  return (
    <QuoteContainer>
      {quote &&
        quote.split(' ').map((word, index) => (
          <>
            {index > 0 && (
              <LetterComponent
                char={' '}
                key={`letter-component-space-${index}`}
                isBlank={false}
              />
            )}
            <WordContainer key={`word-span-${index}`}>
              {word.split('').map((char, charIndex) => (
                <LetterComponent
                  char={char}
                  key={`letter-component-${charIndex}`}
                  isBlank={
                    clickedKeys.indexOf(char.toLocaleLowerCase()) === -1 &&
                    /^[a-zA-Z]+$/.test(char)
                  }
                />
              ))}
            </WordContainer>
          </>
        ))}
    </QuoteContainer>
  );
};
