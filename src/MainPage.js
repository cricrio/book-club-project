import React from "react";

import { PostCard } from "./PostCard";
import { Rail } from "./Rail";
import { Typography } from "@rmwc/typography";

import { getPosts } from "./data";


export const MainPage = () => {
  const posts = getPosts();
  console.log(posts);
  return (
    <div style={{ margin: "2rem" }}>
      {posts.map(({ id, ...post }) => (
        <PostCard key={id} {...post} />
      ))}
    </div>
  );
};
