// 이 파일은 문자열이 담긴 객체를 반환해야한다.

import { css } from "styled-components";

const colors = {
  main: "royalblue",
  white: "white",
  gif: "https://i.pinimg.com/originals/74/af/8a/74af8a2220a9bf1b7fd15798c8ff777b.gif",
};

const rectBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  border: 2px solid ${colors.main};
  color: ${colors.main};
`;

const theme = {
  ...colors,
  rectBox,
};

export default theme;
