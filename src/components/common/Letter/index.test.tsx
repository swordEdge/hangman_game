import { render } from '@testing-library/react';
import { LetterComponent } from './index';

describe('LetterComponent', () => {
  it('renders the letter with the correct content when isBlank is false', () => {
    const { getByTestId } = render(
      <LetterComponent char="A" isBlank={false} />
    );

    const letterElement = getByTestId('letter-component-A');
    expect(letterElement).toHaveTextContent('A');
  });

  it('renders the letter with underscore when isBlank is true', () => {
    const { getByTestId } = render(<LetterComponent char="B" isBlank={true} />);

    const letterElement = getByTestId('letter-component-B');
    expect(letterElement).toHaveTextContent('_');
  });
});
