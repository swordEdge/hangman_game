import styled from 'styled-components';

export const Letter = styled.span<{ $isBlank?: boolean }>`
  width: 30px;
  font-size: 30px;
  display: flex;
  justify-contents: center;
  align-items: center;
`;
