// 이 파일은 문자열이 담긴 객체를 반환해야한다.

import { css } from "styled-components";

const colors = {
  main: "royalblue",
  white: "white",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyh9TdQEqj0yVLlMJ4RY_2oKI6etWTg23olNPMItjoMQEBEpJD",
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
