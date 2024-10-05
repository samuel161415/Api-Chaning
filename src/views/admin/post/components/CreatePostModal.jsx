import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from 'features/posts/postSlice';
import { AiOutlineClose } from 'react-icons/ai';

const CreatePostModal = ({ userId, onClose, isUserSelectable }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(userId);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list_of_users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body, userId: selectedUserId }));
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md px-6 py-10 bg-bg_modal_color rounded-xl shadow-lg dark:bg-navy-800">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-300 hover:text-gray-600 dark:text-white"
        >
          <AiOutlineClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          {isUserSelectable ? (
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="w-full p-2 mb-4 bg-bg_color rounded dark:bg-navy-700 text-white focus:outline-none dark:text-white"
            >
              <option value="" disabled>Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={selectedUserId}
              readOnly
              className="w-full p-2 mb-4 bg-bg_color rounded dark:bg-navy-700 text-white focus:outline-none dark:text-white"
            />
          )}
          <input
            type="text"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 bg-bg_color rounded focus:outline-none dark:bg-navy-700 text-white dark:text-white"
          />
          <textarea
            placeholder="Body"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 mb-4 bg-bg_color rounded focus:outline-none dark:bg-navy-700 text-white dark:text-white"
          />
          <button
            type="submit"
            className="w-full p-2 mb-2 text-pink-500 border border-pink-500 hover:bg-pink-700 hover:text-white"
          >
            Create Post
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full p-2 text-red-500 border border-red-500 hover:bg-red-700 hover:text-white"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;