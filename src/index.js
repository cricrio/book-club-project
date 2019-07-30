import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { TopBar } from "./components/TopBar";
import { MainPage } from "./pages/MainPage";
import { CafePage } from "./pages/CafePage";

import "normalize.css/normalize.css";
import "./styles.css";

import "./materialImports";

const client = new ApolloClient({
  uri: "https://libribook.herokuapp.com/v1/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <TopBar title="BookBlogs" />
      <main>
        <Route path="/" exact component={MainPage} />
        <Route path="/cafe/:id" component={CafePage} />
      </main>
    </Router>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
