import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RadiusButtonComponent } from 'components/common';
import { Container, Table } from './styles';
import { calcScore } from 'utils';
import { AppActions, RootState } from 'store';
import { PATH } from 'consts';

export const ScoreListView: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(AppActions.game.getScoreDataListRequest());
  }, []);

  const { scoreList } = useSelector((state: RootState) => state.game);

  const sortedData = [...scoreList].sort((a, b) => {
    if (
      calcScore(a.length, a.uniqueCharacters, a.errors, a.duration) <
      calcScore(b.length, b.uniqueCharacters, b.errors, b.duration)
    )
      return 1;
    else return -1;
  });

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 &&
            sortedData.map((item) => {
              return (
                <tr key={item.duration}>
                  <td>{item.userName}</td>
                  <td>
                    {calcScore(
                      item.length,
                      item.uniqueCharacters,
                      item.errors,
                      item.duration
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div>
        <RadiusButtonComponent
          isDisabled={false}
          onClick={() => {
            navigate(PATH.DASHBOARD);
          }}
        >
          Go to home page
        </RadiusButtonComponent>

        <RadiusButtonComponent
          isDisabled={false}
          onClick={() => {
            navigate(PATH.QUOTE_PUZZLE);
          }}
        >
          Go to game page
        </RadiusButtonComponent>
      </div>
    </Container>
  );
};
