import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import { QuotePuzzleView } from './index';
import { RootState } from 'store';
import { AnyAction } from '@reduxjs/toolkit';

const initialState: RootState = {
  game: {
    quote: 'Sample quote',
    userName: 'testuser',
    id: '123',
    scoreList: [],
  },
};
const mockStore = configureStore<RootState, AnyAction>([]);

describe.only('QuotePuzzleView', () => {
  let store: MockStore<RootState, AnyAction>;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders the QuotePuzzleView component', () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <QuotePuzzleView />
        </BrowserRouter>
      </Provider>
    );

    // Assert that the quote puzzle view is rendered
    expect(getByTestId('letter-component-S')).toBeInTheDocument();
    expect(getByTestId('letter-component-a')).toBeInTheDocument();
    expect(getByTestId('letter-component-m')).toBeInTheDocument();
    expect(getByTestId('letter-component-p')).toBeInTheDocument();
    expect(getByTestId('letter-component-l')).toBeInTheDocument();
    expect(getAllByTestId('letter-component-e')[0]).toBeInTheDocument();
    expect(getByTestId('letter-component-q')).toBeInTheDocument();
    expect(getByTestId('letter-component-u')).toBeInTheDocument();
    expect(getByTestId('letter-component-o')).toBeInTheDocument();
    expect(getByTestId('letter-component-t')).toBeInTheDocument();
  });

  it('simulates keyboard button click and checks game over message', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuotePuzzleView />
        </BrowserRouter>
      </Provider>
    );

    // Simulate clicking on keyboard buttons
    fireEvent.click(screen.getByTestId('keyboard-button-component-a'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-b'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-c'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-d'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-e'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-f'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-g'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-h'));

    // Assert that the "Game Over!" message is displayed
    const gameOverMessage = screen.getByText('Game Over!');
    expect(gameOverMessage).toBeInTheDocument();
  });

  it('simulates successful completion and checks success message', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuotePuzzleView />
        </BrowserRouter>
      </Provider>
    );

    // Simulate successfully completing the puzzle
    fireEvent.click(screen.getByTestId('keyboard-button-component-s'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-a'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-m'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-p'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-l'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-e'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-q'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-u'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-o'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-t'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-e'));

    // Assert that the success message is displayed
    const successMessage = screen.getByText(
      'Congratulation! You guessed all successfully!'
    );
    expect(successMessage).toBeInTheDocument();
  });

  it('dispatch sendScoreDataRequest action when user clicks Finish Button', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuotePuzzleView />
        </BrowserRouter>
      </Provider>
    );

    // Simulate successfully completing the puzzle
    fireEvent.click(screen.getByTestId('keyboard-button-component-s'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-a'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-m'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-p'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-l'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-e'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-q'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-u'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-o'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-t'));
    fireEvent.click(screen.getByTestId('keyboard-button-component-e'));

    // Assert that the success message is displayed
    const finishButton = screen.getByText('Finish');
    fireEvent.click(finishButton);
  });
});
