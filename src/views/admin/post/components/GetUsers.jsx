import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "features/user/userSlice";
import CreatePostModal from "./CreatePostModal";
const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list_of_users);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleCreatePostClick = (userId) => {
    setSelectedUserId(userId); // Set the selected user ID
  };

  const closeModal = () => {
    setSelectedUserId(null); // Reset on modal close
  };

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  let content;

  if (userStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (userStatus === "succeeded") {
    content = users.map((user) => (
      <div
        className="card m-2 flex w-full flex-col items-center justify-center rounded-xl bg-[#181C14]  p-4 text-white shadow-lg"
        key={user.id}
      >
        <h3 className="text-xl font-bold">{user.name}</h3>
        <p>{user.email}</p>
        {/* Other user details */}

        <button
          onClick={() => handleCreatePostClick(user.id)}
          className="mt-2 rounded  px-4 py-2 font-bold text-pink-500 border border-pink-500 hover:bg-pink-700 hover:text-white "
        >
          Create Post
        </button>
      </div>
    ));
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="user-list shadow-navy-900/9 relative my-5 flex  flex-col items-center   bg-bg_component_color p-4 rounded-xl">
      <h1 className="text-3xl font-bold text-white md:text-4xl ">User Lists</h1>
      <div className="content-container mt-5 py-2 flex h-[70vh] w-full flex-col items-center  overflow-y-auto">
        {content}
      </div>
      {selectedUserId && (
        <CreatePostModal userId={selectedUserId} onClose={closeModal} />
      )}
    </div>
  );
};

export default UsersList;
