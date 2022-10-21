import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
/*
GlobalStyle은 왜쓸까? => 협업, 개인 프로젝트 시작 전에 '공통으로 적용'해야할 코드를 쓰고싶을 때 사용한다. */
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
