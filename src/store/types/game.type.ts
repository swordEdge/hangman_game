import { ScoreDataType, ScoreListItemType } from 'types';

/* eslint-disable @typescript-eslint/ban-types */
export type GetQuoteRequestPayload = undefined;

export type GetQuoteSuccessPayload = {
  id: string;
  quote: string;
};

export type GetQuoteFailurePayload = undefined;

export type RegisterUserPayload = {
  userName: string;
};

export type SendScoreDataRequest = {
  data: ScoreDataType;
  next: Function;
};

export type GetScoreDataListRequest = undefined;

export type GetScoreDataListSuccessPayload = ScoreListItemType[];
