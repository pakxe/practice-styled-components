import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Button = styled.button`
  /* 버튼의 기본적인 스타일링이다. */
  margin: 1em;
  padding: 10px;
  border-radius: 3px;
  background: white;

  /* 테마에 접근해서 만드는 스타일링이다. */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// 테마 객체를 만든다. main과 back이라는 이름의 색을 갖고 있다.
const theme = {
  main: "mediumseagreen",
};

function App() {
  return (
    <>
      <Button theme={{ main: "royalblue" }}>
        theme props 직접 작성한 버튼
      </Button>
      <ThemeProvider theme={theme}>
        <Button>원래의 테마 방식</Button>
        <Button theme={{ main: "darkorange" }}>
          원래의 테마 방식 하위에서의 theme props
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
