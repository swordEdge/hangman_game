import { call, put } from 'redux-saga/effects';
import { request } from 'utils';
import { AppActions, ResponseGenerator } from 'store';
import { PayloadAction } from '@reduxjs/toolkit';
import { ScoreDataType, ScoreListItemType } from 'types';

export function* getQuoteRequestSaga() {
  try {
    const response: ResponseGenerator<{ _id: string; content: string }> =
      yield call(request, {
        url:
          `${process.env.REACT_APP_QUOTE_SERVER_URL}` ||
          'http://api.quotable.io/random',
        method: 'GET',
      });
    const responseData = response.data;

    yield put(
      AppActions.game.getQuoteSuccess({
        id: responseData._id,
        quote: responseData.content,
      })
    );
  } catch (err) {
    yield put(AppActions.game.getQuoteFailure());
  }
}

export function* sendScoreSaga(
  // eslint-disable-next-line @typescript-eslint/ban-types
  action: PayloadAction<{ data: ScoreDataType; next: Function }>
) {
  try {
    const response: ResponseGenerator<{ _id: string; content: string }> =
      yield call(request, {
        url:
          `${process.env.REACT_APP_SCORE_SERVER_URL}` ||
          'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores',
        method: 'POST',
        data: action.payload.data,
      });
    const responseData = response.data;

    yield put(
      AppActions.game.sendScoreDataSuccess({
        id: responseData._id,
        quote: responseData.content,
      })
    );

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (err) {
    yield put(AppActions.game.sendScoreDataFailure());
  }
}

export function* getScoreDataListRequestSaga() {
  try {
    const response: ResponseGenerator<ScoreListItemType[]> = yield call(
      request,
      {
        url:
          `${process.env.REACT_APP_SCORE_SERVER_URL}` ||
          'https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores',
        method: 'GET',
      }
    );
    const responseData = response.data;

    yield put(AppActions.game.getScoreDataListSuccess(responseData));
  } catch (err) {
    yield put(AppActions.game.getScoreDataListFailure());
  }
}
