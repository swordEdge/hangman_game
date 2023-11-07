import React from 'react';
import { WithLayout } from 'components';
import { RegisterUserView } from 'components';

const RegisterUser: React.FC = () => {
  return <RegisterUserView />;
};

export const RegisterUserPage = WithLayout(RegisterUser);
