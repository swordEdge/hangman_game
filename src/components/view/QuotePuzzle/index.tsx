import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  KeyboardButtonComponent,
  RadiusButtonComponent,
} from 'components/common';
import { QuoteComponent } from './QuoteComponent';
import {
  Container,
  ButtonsWrapper,
  ErrorWrapper,
  SuccessWrapper,
} from './styles';

import { PATH } from 'consts';
import { AppActions, RootState } from 'store';

const alphabetArray: string[] = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 97)
);

export const QuotePuzzleView: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [startTime, setStatTime] = useState<Date>(new Date());
  const [duration, setDuration] = useState<number>(0);
  const [clickedKeys, setClickedKeys] = useState<string[]>([]);
  const [errorCount, setErrorCount] = useState<number>(0);

  const {
    quote,
    userName,
    id: quoteId,
  } = useSelector((state: RootState) => state.game);

  const checkIsSuccess = () =>
    quote &&
    quote.length > 0 &&
    new RegExp(`^[${[...clickedKeys].join('')}]*$`).test(
      quote.replace(/[^a-zA-Z]/g, '').toLowerCase()
    );

  useEffect(() => {
    if (!userName) {
      navigate(PATH.DASHBOARD);
    }
    dispatch(AppActions.game.getQuoteRequest());
    setStatTime(new Date());
    setClickedKeys([]);
    setErrorCount(0);
  }, []);

  useEffect(() => {
    if (checkIsSuccess()) {
      setIsSuccess(true);
      setDuration(new Date().getTime() - startTime.getTime());
    }
  }, [clickedKeys]);

  const onRestartHandler = () => {
    dispatch(AppActions.game.getQuoteRequest());
    setStatTime(new Date());
    setClickedKeys([]);
    setErrorCount(0);
  };

  const onFinishHandler = () => {
    dispatch(
      AppActions.game.sendScoreDataRequest({
        data: {
          quoteId,
          length: quote.length,
          uniqueCharacters: new Set(
            quote
              .replace(/[^a-zA-Z]/g, '')
              .toLowerCase()
              .split('')
          ).size,
          duration,
          errors: errorCount,
          userName,
        },
        next: () => {
          navigate(PATH.SCORE_LIST);
        },
      })
    );
  };

  const onKeyDownHandler = (key: string) => {
    setClickedKeys([...new Set([key, ...clickedKeys])]);
    quote && !quote.includes(key) && setErrorCount(errorCount + 1);
  };

  return (
    <Container>
      {isSuccess ? (
        <SuccessWrapper>
          Congratulation! You guessed all successfully!
        </SuccessWrapper>
      ) : (
        <ErrorWrapper>
          {errorCount > 5 ? 'Game Over!' : `Error Count: ${errorCount}`}
        </ErrorWrapper>
      )}
      <QuoteComponent clickedKeys={clickedKeys} quote={quote}></QuoteComponent>
      <ButtonsWrapper>
        {alphabetArray.map((c, i) => (
          <KeyboardButtonComponent
            key={`keyboard-button-component-${i}`}
            text={c}
            isDisabled={
              clickedKeys.indexOf(c) !== -1 || errorCount > 5 || isSuccess
            }
            onClick={() => onKeyDownHandler(c)}
          ></KeyboardButtonComponent>
        ))}
      </ButtonsWrapper>
      <RadiusButtonComponent
        isDisabled={false}
        onClick={() => (isSuccess ? onFinishHandler() : onRestartHandler())}
        textColor={isSuccess ? 'green' : undefined}
      >
        {isSuccess ? 'Finish' : 'Restart'}
      </RadiusButtonComponent>
    </Container>
  );
};
