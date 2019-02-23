import React from "react";

import { PostCard } from "./PostCard";
import { Rail } from "./Rail";
import { Typography } from "@rmwc/typography";

import { getBlogs } from "./data";

const BlogRail = ({ title, posts }) => (
  <>
    <Typography use="headline5" tag="h5">
      {title}
    </Typography>
    <Rail>
      {posts.map(post => (
        <PostCard {...post} />
      ))}
    </Rail>
  </>
);

export const MainPage = () => {
  const blogs = getBlogs();
  return (
    <div style={{ margin: "2rem" }}>
      {blogs.map(blog => (
        <BlogRail {...blog} />
      ))}
    </div>
  );
};
