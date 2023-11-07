import { ScoreListView } from 'components';
import React from 'react';
import { WithLayout } from 'components';

const ScoreList: React.FC = () => {
  return <ScoreListView />;
};

export const ScoreListPage = WithLayout(ScoreList);
