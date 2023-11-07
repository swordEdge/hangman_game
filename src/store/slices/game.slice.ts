/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quote } from 'store/types';
import { ScoreDataType } from 'types';

type GameState = {
  id: string;
  userName: string;
  quote: string;
  scoreList: ScoreDataType[];
};

const initialState: GameState = {
  id: '',
  userName: '',
  quote: '',
  scoreList: [] as ScoreDataType[],
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    registerUser(
      state: GameState,
      action: PayloadAction<Quote.RegisterUserPayload>
    ) {
      state.userName = action.payload.userName;
    },
    getQuoteRequest(
      _state: GameState,
      _action: PayloadAction<Quote.GetQuoteRequestPayload>
    ) {
      // getQuote request
    },
    getQuoteSuccess(
      state: GameState,
      action: PayloadAction<Quote.GetQuoteSuccessPayload>
    ) {
      state.id = action.payload.id;
      state.quote = action.payload.quote;
    },
    getQuoteFailure() {
      // getQuote fail
    },
    sendScoreDataRequest(
      _state: GameState,
      _action: PayloadAction<Quote.SendScoreDataRequest>
    ) {
      // getQuote request
    },
    sendScoreDataSuccess(
      state: GameState,
      action: PayloadAction<Quote.GetQuoteSuccessPayload>
    ) {
      state.id = action.payload.id;
      state.quote = action.payload.quote;
    },
    sendScoreDataFailure() {
      // getQuote fail
    },
    getScoreDataListRequest(
      _state: GameState,
      _action: PayloadAction<Quote.GetScoreDataListRequest>
    ) {
      // getQuote request
    },
    getScoreDataListSuccess(
      state: GameState,
      action: PayloadAction<Quote.GetScoreDataListSuccessPayload>
    ) {
      state.scoreList = action.payload;
    },
    getScoreDataListFailure() {
      // getQuote fail
    },
  },
});

export const actions = gameSlice.actions;
export const reducer = gameSlice.reducer;
