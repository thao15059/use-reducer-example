import React, { useState } from "react";

import Card from "../card/card.component";

import useFetchArrayWithUrl from "../../effects/use-fetch.effect";

const Post = ({ postId }) => {
  const post = useFetchArrayWithUrl(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`
  );

  return (
    <Card>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>No post found</p>
      )}
    </Card>
  );
};

export default Post;
