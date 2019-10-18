import React from "react";

import { PostCard } from "./PostCard";

import { getPosts } from "./data";
import { SearchDrawer } from "./SearchDrawer";

import { Grid, GridCell } from "@rmwc/grid";

export const PostsPage = () => {
  const posts = getPosts();
  return (
    <Grid align="left">
      <GridCell span={2} phone={0}>
        <SearchDrawer />
      </GridCell>
      <GridCell span={14} phone={4}>
        {posts.map(({ id, ...post }) => (
          <PostCard key={id} {...post} />
        ))}
      </GridCell>
      <GridCell span={2} phone={0}>
        <SearchDrawer />
      </GridCell>
    </Grid>
  );
};
