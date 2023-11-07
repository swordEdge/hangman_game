// import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KeyboardButtonComponent } from './index';

describe('KeyboardButtonComponent', () => {
  it('renders the button with the correct text and click event will be occurred when user clicks the button when isDisabled is false', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <KeyboardButtonComponent
        text="Test"
        isDisabled={false}
        onClick={onClick}
      />
    );

    const button = getByText('Test');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it('disables the button and prevents click when isDisabled is true', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <KeyboardButtonComponent
        text="Test"
        isDisabled={true}
        onClick={onClick}
      />
    );

    const button = getByText('Test');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
