import { all, takeLatest } from 'redux-saga/effects';
import {
  getQuoteRequestSaga,
  getScoreDataListRequestSaga,
  sendScoreSaga,
} from './game.saga';
import { gameAction } from 'store/slices';

export function* appSaga() {
  yield all([takeLatest(gameAction.getQuoteRequest.type, getQuoteRequestSaga)]);
  yield all([takeLatest(gameAction.sendScoreDataRequest.type, sendScoreSaga)]);
  yield all([
    takeLatest(
      gameAction.getScoreDataListRequest.type,
      getScoreDataListRequestSaga
    ),
  ]);
}
