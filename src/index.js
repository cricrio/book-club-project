import React from "react";
import ReactDOM from "react-dom";

import { TopBar } from "./components/TopBar";
import { MainPage } from "./pages/MainPage";
import { CafePage } from "./pages/CafePage";

import "./styles.css";
import "normalize.css/normalize.css";
import "./materialImports";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <TopBar title="BookBlogs" />
    <main>
      <Route path="/" exact component={MainPage} />
      <Route path="/cafe/:id" component={CafePage} />
    </main>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
