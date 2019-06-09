import React from "react";

import { PostCard } from "./PostCard";

import { getPosts } from "./data";
import { SearchDrawer } from "./SearchDrawer";

import { Grid, GridCell } from "@rmwc/grid";

export const MainPage = () => {
  const posts = getPosts();
  console.log(posts);
  return (
    <Grid align="left">
      <GridCell span={3} phone={0}>
        <SearchDrawer />
      </GridCell>
      <GridCell span={6} phone={4}>
        {posts.map(({ id, ...post }) => (
          <PostCard key={id} {...post} />
        ))}
      </GridCell>
      <GridCell span={3} phone={0}>
        <SearchDrawer />
      </GridCell>
    </Grid>
  );
};
