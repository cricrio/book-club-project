import React from "react";
import ReactDOM from "react-dom";

import { TopBar } from "./TopBar";
import { MainPage } from "./MainPage";

import "./styles.css";
import "normalize.css/normalize.css";
import "./materialImports";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <>
    <TopBar title="BookBlogs" />
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route
        path="/club/:id"
        component={({ match }) => <h1>Club {match.params.id}</h1>}
      />
    </Router>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
