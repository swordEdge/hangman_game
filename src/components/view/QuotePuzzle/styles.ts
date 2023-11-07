import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  column-gap: 8px;
  align-items: center;
  justify-content: center;

  background: -webkit-linear-gradient(
    top,
    #fff 0%,
    #f2f2f2 25%,
    rgba(#444, 0.3) 100%
  );
  min-height: 100vh;
`;

export const ButtonsWrapper = styled.div`
  width: 60%;
  display: flex;
  column-gap: 8px;
  row-gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const ErrorWrapper = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  color: red;
`;

export const SuccessWrapper = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  color: green;
`;
