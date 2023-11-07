import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from 'consts';
import {
  NotFoundPage,
  RegisterUserPage,
  QuotePuzzlePage,
  ScoreListPage,
} from 'pages';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.QUOTE_PUZZLE} element={<QuotePuzzlePage />} />
        <Route path={PATH.DASHBOARD} element={<RegisterUserPage />} />
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={PATH.SCORE_LIST} element={<ScoreListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
