/* 
styled-component: CSS를 편하게 코딩할 수 있게 해주는 라이브러리
CSS in JS이므로 CSS코드를 js파일 안에 작성해야한다. 

사용 준비: 
1. npm i styled-components 
2. 사용할 장소에서 import styled from "styled-components"; 
*/
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const Box = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  margin: 10px;
  & > span {
    color: ${(props) => (props.blue ? props.theme.white : props.theme.main)};
  }
  // props안에 여러줄의 css를 작성할거면 css 키워드와 함께 작성한다. (안써줘도 되긴한데 가독성때문인가?)
  ${(props) =>
    props.blue
      ? css`
          background: ${(props) => props.theme.main};
          border: 2px solid ${(props) => props.theme.main};
        `
      : css`
          background: ${(props) => props.theme.white};
          border: 2px solid ${(props) => props.theme.main};
        `}
`;

// attrs 생성자 사용
const Input = styled.input.attrs({
  type: "checkbox",
})`
  margin: 10px;

  width: 30px;
  height: 30px;
  background: ${(props) => props.theme.main};
`;

const RectBox = styled.div`
  height: 50px;
  width: 100px;
  margin: 10px;

  ${(props) => props.theme.rectBox}
`;

function App() {
  return (
    <Wrapper>
      <Box blue>
        <span>이벤트</span>
      </Box>
      <Box>
        <span>이벤트</span>
      </Box>
      <Input checked />
      <Input />

      {/* as props를 이용해 스타일드컴포넌트의 HTML태그 바꾸기 */}
      <Input as='div' />
      <RectBox />
    </Wrapper>
  );
}

export default App;
