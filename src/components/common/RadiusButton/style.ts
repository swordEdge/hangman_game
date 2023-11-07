import styled from 'styled-components';

export const Button = styled.div<{
  $isDisabled?: boolean;
  $textColor?: string;
}>`
  box-sizing: border-box;
  line-height: 80px;
  font-size: 22px;
  text-align: center;
  width: 150px;
  color: ${(props) =>
    props.$isDisabled ? '#a1a1a1' : props.$textColor ?? '#555'};
  cursor: ${(props) => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  margin: 0 8px;
  height: 80px;
  border-color: #f2f2f2;
  border-style: solid;
  text-shadow:
    0 0.5px 1px #777,
    0 2px 6px #f2f2f2;
  border-width: 1px;
  border-radius: 50px;
  background: -webkit-linear-gradient(
    top,
    #f9f9f9 0%,
    #d2d2d2 80%,
    #c0c0c0 100%
  );
  font-family: sans-serif;
  display: inline-block;
  transition:
    box-shadow 0.3s ease,
    transform 0.15s ease;
  box-shadow: ${(props) =>
    props.$isDisabled
      ? '0 0 1px #888,\
      0 1px 0 #fff,\
      0 0 0 #c0c0c0,\
      0 0px 30px rgba(68, 68, 68, 0.15),\
      2px 2px 4px rgba(68, 68, 68, 0.25),\
      -2px 2px 4px rgba(68, 68, 68, 0.25),\
      0 0px 4px rgba(68, 68, 68, 0.25);'
      : '0 0 1px #888, \
      0 1px 0 #fff, \
      0 6px 0 #c0c0c0, \
      0 8px 17px rgba(68, 68, 68, 0.4), \
      2px 1px 4px rgba(68, 68, 68, 0.25), \
      -2px 1px 4px rgba(68, 68, 68, 0.25), \
      0 9px 16px rgba(68, 68, 68, 0.1);'};

  &:hover,
  &:focus {
    box-shadow: ${(props) =>
      !props.$isDisabled &&
      `0 0 1px #888,
      0 1px 0 #fff,
      0 4px 0 #c0c0c0,
      0 2px 35px rgba(68, 68, 68, 0.3),
      2px 2px 4px rgba(68, 68, 68, 0.25),
      -2px 2px 4px rgba(68, 68, 68, 0.25),
      0 7px 4px rgba(68, 68, 68, 0.1);`}
    transform: ${(props) => !props.$isDisabled && 'translateY(2px)'};
  }

  &:active {
    box-shadow:
      0 0 1px #888,
      0 1px 0 #fff,
      0 0 0 #c0c0c0,
      0 0px 30px rgba(68, 68, 68, 0.15),
      2px 2px 4px rgba(68, 68, 68, 0.25),
      -2px 2px 4px rgba(68, 68, 68, 0.25),
      0 0px 4px rgba(68, 68, 68, 0.25);
    transform: translateY(4px);
  }

  transform: ${(props) => props.$isDisabled && 'translateY(4px);'};
`;
