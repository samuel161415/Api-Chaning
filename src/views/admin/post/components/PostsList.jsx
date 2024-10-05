import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "features/posts/postSlice";
import { fetchComments } from "features/comments/commentSlice";
import CreatePostModal from "./CreatePostModal";
import { AiOutlinePlus } from "react-icons/ai"; // Add this import at the top

const PostList = ({ setSelectedPost }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const handleCreatePostClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGetCommentsClick = (postId) => {
    setSelectedPost(posts.find((post) => post.id === postId));
    dispatch(fetchComments(postId));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.id.toString().includes(searchTerm)
  );

  let content;

  if (postStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (postStatus === "succeeded") {
    content = filteredPosts.map((post) => (
      <div
        className="card m-2 flex w-full flex-col items-center justify-center rounded-xl bg-bg_color p-4 text-white shadow-lg"
        key={post.id}
      >
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="mt-2 text-gray-300">{post.body}</p>
        <button
          onClick={() => handleGetCommentsClick(post.id)}
          className="mt-2 rounded border border-pink-500 p-2 font-bold text-pink-500 hover:bg-pink-700 hover:text-white"
        >
          Get Comments
        </button>
      </div>
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="post-list shadow-navy-900/9 relative col-span-2 my-5 flex flex-col   rounded-xl bg-bg_component_color p-4 shadow-2xl">
      <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
        Post Lists
      </h1>
      <button
        onClick={handleCreatePostClick}
        className="mt-10  flex items-center justify-center md:w-1/2  whitespace-nowrap rounded border border-pink-500 p-2 px-10 font-bold text-pink-500 hover:bg-pink-700 hover:text-white"
      >
        <AiOutlinePlus className="mr-2" size={20} />
        Create Post
      </button>
      <div className="mt-4 flex  w-full flex-col justify-between py-2">
        <input
          type="text"
          placeholder="Search by ID or Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 w-full rounded bg-bg_color p-2 text-white focus:outline-none dark:bg-navy-700 dark:text-white"
        />
      </div>
      <div className="content-container flex h-[70vh] w-full flex-col items-center overflow-y-auto py-2">
        {content}
      </div>
      {isModalOpen && <CreatePostModal onClose={closeModal} isUserSelectable />}
    </div>
  );
};

export default PostList;
