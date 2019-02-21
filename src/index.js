import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "@rmwc/theme";
import { Typography } from "@rmwc/typography";

import { TopBar } from "./TopBar";
import { PostCard } from "./PostCard";
import { Rail } from "./Rail";

import "./styles.css";
import "@material/theme/dist/mdc.theme.css";
import "@material/typography/dist/mdc.typography.css";

function App() {
  return (
    <>
      <ThemeProvider
        options={{
          primary: "black",
          secondary: "blue",
          background: "#EEEEEE"
        }}
      >
        <TopBar title="MyRssFeeder" />
        <div style={{ margin: "2rem" }}>
          <Typography use="headline5" tag="h5">
            Le blog de Mélanie
          </Typography>
          <Rail style={{ overflow: "hidden" }}>
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
          </Rail>
          <Typography use="headline5" tag="h5">
            Le blog de Paul
          </Typography>
          <Rail>
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
            <PostCard title="Premier Post" />
          </Rail>
        </div>
      </ThemeProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
