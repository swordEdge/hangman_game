import React from 'react';
import { WithLayout } from 'components';
import { QuotePuzzleView } from 'components';

const QuotePuzzle: React.FC = () => {
  return <QuotePuzzleView />;
};

export const QuotePuzzlePage = WithLayout(QuotePuzzle);
