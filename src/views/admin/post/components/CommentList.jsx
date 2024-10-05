import React from "react";
import { useSelector } from "react-redux";

const CommentList = ({ post }) => {
  const comments = useSelector((state) => state.comments.comments);
  const commentStatus = useSelector((state) => state.comments.status);
  const error = useSelector((state) => state.comments.error);

  let content;

  if (commentStatus === "loading") {
    content = <div className="text-white">Loading...</div>;
  } else if (commentStatus === "succeeded") {
    content = comments.map((comment) => (
      <div
        className="card m-2 flex w-full flex-col items-center justify-center rounded-xl bg-bg_color p-4 text-white shadow-lg"
        key={comment.id}
      >
        <h3 className="text-xl font-bold">{comment.name}</h3>
        <p className="mt-2 text-gray-300">{comment.body}</p>
      </div>
    ));
  } else if (commentStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className=" w-full comment-list shadow-navy-900/9 relative my-5 flex  flex-col items-center rounded-xl bg-bg_component_color  px-3 py-4 shadow-2xl">
      <h1 className="text-3xl font-bold text-white md:text-4xl">Comments</h1>
      {post && (
        <div className="mt-5 py-2">
          <h1 className="text-xl font-bold text-white "> <span className="text-pink-500">{post.title}</span>
          </h1>
          <div className="content-container flex h-[70vh] w-full flex-col items-center overflow-y-auto py-2">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentList;
