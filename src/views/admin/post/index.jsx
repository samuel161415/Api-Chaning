import React, { useState } from "react";
import UsersList from "./components/GetUsers";
import PostList from "./components/PostsList";
import CommentList from "./components/CommentList";

const Post = () => {
  const [selectedPost, setSelectedPost] = useState(null); // Add state for selectedPost

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 my-6 ">
        <UsersList />
        <PostList setSelectedPost={setSelectedPost}/>
        <CommentList post={selectedPost} />
      </div>
    </div>
  );
};

export default Post;
