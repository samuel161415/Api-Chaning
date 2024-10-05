# API Chaining Dashboard

This project demonstrates a web application built with React that showcases complex API interactions involving GET and POST requests. The application simulates a process where API responses are chained to request parameters of subsequent API requests. The dashboard facilitates the visual interaction with APIs provided by JSONPlaceholder.

## Setup Instructions

To get this project running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samuel161415/Api-Chaning.git
   cd api-chaining
   ```
2, **Install dependencies:**
   ```
   npm install
   ```
3, **Start the development server:**
  ```bash
  npm start
  ```
   This will run the app in the development mode. Open http://localhost:3000 to view it in the browser.

## Project Structure
The application consists of two main parts:

### 1, Post Page: 
This page facilitates interaction with users, posts, and comments:

- Users: Displays a list of users fetched from https://jsonplaceholder.typicode.com/users. Users are stored in a Redux store and displayed in a scrollable column.
- Posts: Allows creation of posts in two ways:
Directly from the user list, where the userId is pre-filled and immutable.
From the post list section, where userId can be selected from a dropdown, providing flexibility in assigning posts to users.
They both call post request https://jsonplaceholder.typicode.com/posts by passing necessary details and fields and the returned result will be stored in Postlist of the redux store
Comments: Enables fetching comments for each post by pressing the "Get Comments" button, which triggers a call to https://jsonplaceholder.typicode.com/comments?postId={postId}.

### 2, API Diagram Page: 
This page shows a visual representation of the API flow, demonstrating how data moves from fetching users to creating posts and retrieving comments. It helps users visually understand the chaining of API calls.



## Brief Explanation of the Approach
The application initializes by loading all users and posts. Posts are either pre-existing or can be created by users. The distinction in post creation methods (direct from users or from the post section) addresses different use cases within the application.

### Assumptions and Decisions
Existing Posts: Initial fetch of all posts is necessary to allow for comment retrieval, as comments in the JSONPlaceholder API are only available for post IDs 1-100.

- New Posts: Posts created during the session receive an ID greater than 100, which do not have pre-existing comments, highlighting a limitation in fetching comments for new posts.

### Known Issues
Comment Fetching: Unable to fetch comments for newly created posts due to their IDs exceeding the range for which comments exist in the JSONPlaceholder API.

### Completed Features
- Fetch and display users, posts, and comments.
- Create new posts with fixed or selectable userId.
- API chaining visualized through a UI that shows data flow from user selection to comments on posts.
- Responsive design suitable for both desktop and mobile views.

### Additional Views in Diagram
An additional view demonstrates the API flow, from retrieving users to fetching comments, enhancing understanding of data interactions and transformations within the application.

### Demo Video
Here is a link to a video demonstrating the functionality of the application: https://drive.google.com/file/d/1JWaFbemCClRdDF74Ze8WW9_NgtI6aAad/view?usp=sharing 
