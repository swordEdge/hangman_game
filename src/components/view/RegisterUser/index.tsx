import React, { useState } from 'react';
import { Container, Content, UserNameInput } from './styles';
import { PATH } from 'consts';
import { RadiusButtonComponent } from 'components/common';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';

export const RegisterUserView: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState<string>('');

  const onClickStartButtonHandler = () => {
    if (userName.length) {
      dispatch(AppActions.game.registerUser({ userName }));
      navigate(PATH.QUOTE_PUZZLE);
    }
  };

  return (
    <Container>
      <Content>Welcome to the HangMan Game!!!</Content>
      <UserNameInput
        placeholder="Please input name"
        value={userName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
      />
      <RadiusButtonComponent
        isDisabled={!userName.length}
        onClick={onClickStartButtonHandler}
      >
        Start Game
      </RadiusButtonComponent>
    </Container>
  );
};
