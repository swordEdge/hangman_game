import React from 'react';
import { PATH } from 'consts';
import { Header } from './styles';
import { Link } from 'react-router-dom';

export const HeaderSection: React.FC = () => {
  return (
    <Header>
      <Link
        to={PATH.DASHBOARD}
        style={{
          fontSize: '30px',
          lineHeight: '36px',
          fontWeight: 'bold',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        HangMan Game
      </Link>
    </Header>
  );
};
