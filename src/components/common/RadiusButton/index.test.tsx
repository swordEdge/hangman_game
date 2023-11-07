import { render } from '@testing-library/react';
import { RadiusButtonComponent } from './index';
import '@testing-library/jest-dom/extend-expect';

describe('RadiusButtonComponent', () => {
  it('renders the button with the correct content', () => {
    const { getByText } = render(
      <RadiusButtonComponent
        isDisabled={false}
        onClick={() => {
          console.log('clicked');
        }}
        textColor="white"
      >
        Click me!
      </RadiusButtonComponent>
    );

    const buttonElement = getByText('Click me!');
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the correct styles when isDisabled is true', () => {
    const { getByText } = render(
      <RadiusButtonComponent
        isDisabled={true}
        onClick={() => {
          console.log('clicked');
        }}
        textColor="white"
      >
        Click me!
      </RadiusButtonComponent>
    );

    const buttonElement = getByText('Click me!');
    expect(buttonElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies the correct styles when textColor is set', () => {
    const { getByText } = render(
      <RadiusButtonComponent
        isDisabled={false}
        onClick={() => {
          console.log('clicked');
        }}
        textColor="red"
      >
        Click me!
      </RadiusButtonComponent>
    );

    const buttonElement = getByText('Click me!');
    expect(buttonElement).toHaveAttribute('aria-disabled', 'false');
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <RadiusButtonComponent
        isDisabled={false}
        onClick={onClickMock}
        textColor="white"
      >
        Click me!
      </RadiusButtonComponent>
    );

    const buttonElement = getByText('Click me!');
    buttonElement.click();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
