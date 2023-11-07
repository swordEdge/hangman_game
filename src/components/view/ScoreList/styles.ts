import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  column-gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.h1`
  margin-bottom: 40px;
`;

export const UserNameInput = styled.input`
  font-size: 24px;
  outline: none;
  border-radius: 5px;
  border: 1px grey solid;
  padding: 8px;
  text-align: center;
  margin-bottom: 20px;
`;

export const GoToLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const Table = styled.table`
  width: 500px;
  margin: 20px auto;
  border-collapse: collapse;
  text-align: center;
  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
`;
