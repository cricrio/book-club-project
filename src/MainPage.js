import React from "react";

import { PostCard } from "./PostCard";

import { getPosts } from "./data";
import { SearchDrawer } from "./SearchDrawer";

import { Grid, GridCell } from "@rmwc/grid";

export const MainPage = () => {
  const posts = getPosts();
  console.log(posts);
  return (
    <Grid>
      <GridCell span="3">
        <SearchDrawer />
      </GridCell>
      <GridCell span="6">
        <section>
          {posts.map(({ id, ...post }) => (
            <PostCard key={id} {...post} />
          ))}
        </section>
      </GridCell>
      <GridCell span="3">
        <SearchDrawer />
      </GridCell>
    </Grid>
  );
};
