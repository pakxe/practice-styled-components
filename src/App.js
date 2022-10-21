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

  // props안에 여러줄의 css를 작성할거면 css 키워드와 함께 작성한다. (안써줘도 되긴한데 가독성때문인가?)
  ${(props) =>
    props.blue
      ? css`
          background: royalblue;
          border: 2px solid royalblue;

          // nesting
          & > span {
            color: white;
          }
        `
      : css`
          background: white;
          border: 2px solid royalblue;

          //nesting
          & > span {
            color: royalblue;
          }
        `}
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
    </Wrapper>
  );
}

export default App;
