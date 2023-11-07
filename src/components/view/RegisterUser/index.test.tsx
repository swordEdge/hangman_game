import { render, fireEvent, screen } from '@testing-library/react';
import { RegisterUserView } from './index';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppActions } from 'store';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe.only('RegisterUserView', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  
  it('should dispatch an action and navigate when the start button is clicked with a valid username', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(
      <BrowserRouter>
        <RegisterUserView />
      </BrowserRouter>
    );

    const inputElement = screen.getByPlaceholderText('Please input name');
    const startButton = screen.getByText('Start Game');

    // Simulate user entering a username
    fireEvent.change(inputElement, { target: { value: 'testuser' } });

    // Simulate clicking the start button
    fireEvent.click(startButton);

    // Verify that the dispatch function was called with the expected action
    expect(mockDispatch).toHaveBeenCalledWith({
      type: AppActions.game.registerUser.type,
      payload: { userName: 'testuser' },
    });
  });

  it('should not dispatch an action or navigate when the start button is clicked with an empty username', () => {
    const mockDispatch = jest.fn();
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);

    render(
      <BrowserRouter>
        <RegisterUserView />
      </BrowserRouter>
    );

    const startButton = screen.getByText('Start Game');

    // Simulate clicking the start button without entering a username
    fireEvent.click(startButton);

    // Verify that the dispatch function was not called
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
