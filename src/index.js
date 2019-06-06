import React from "react";
import ReactDOM from "react-dom";

import { TopBar } from "./TopBar";
import { MainPage } from "./MainPage";

import "./styles.css";
import "normalize.css/normalize.css";
import "./materialImports";

const App = () => (
  <>
    <TopBar title="BookBlogs" />
    <MainPage />
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
