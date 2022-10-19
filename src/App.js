import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Button = styled.button`
  /* 버튼의 기본적인 스타일링이다. */
  margin: 1em;
  padding: 10px;
  border-radius: 3px;

  /* 테마에 접근해서 만드는 스타일링이다. */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  background: ${(props) => props.theme.back};
`;

// 테마 객체를 만든다. main과 back이라는 이름의 색을 갖고 있다.
const theme = {
  main: "palevioletred",
  back: "white",
};

const invertTheme = ({ main, back }) => ({
  /* 아래의 코드 의미: 이 함수는 새로운 객체를 생성해서 반환하는데 생성하는 객체에는 main, back 이라는 
  두개의 프로퍼티 키가 존재한다. 그리고 각 프로퍼티 키의 값은 부모 테마에게서 받아온 테마 객체 내부의
  프로퍼티 main, back의 값인 "white", "palevioletred" 라는 뜻이다. 
  
  결국 invertTheme의 반환값은
  { main: "white", back: "palevioletred" } 가 된다. */
  main: back,
  back: main,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button>원래의 테마</Button>
      <ThemeProvider theme={invertTheme}>
        <Button>바뀐 테마</Button>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
