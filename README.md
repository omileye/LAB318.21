# SBA 319 Blog Platform API

This is a simple blog platform API built with Node.js, Express, and MongoDB. It supports user registration, post creation, and comments on posts.

## Routes

### Users
- **GET /users**: Retrieve all users
- **POST /users**: Create a new user
- **PUT /users/:id**: Update an existing user
- **DELETE /users/:id**: Delete a user

### Posts
- **GET /posts**: Retrieve all posts
- **POST /posts**: Create a new post
- **PUT /posts/:id**: Update an existing post
- **DELETE /posts/:id**: Delete a post

### Comments
- **GET /comments**: Retrieve all comments
- **POST /comments**: Create a new comment
- **PUT /comments/:id**: Update an existing comment
- **DELETE /comments/:id**: Delete a comment

## Installation

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the server:
    ```bash
    npm start
    ```
4. Server runs on `http://localhost:5050`

## Notes
- Ensure MongoDB is running locally or update the connection string in `index.js`.
- Data validation and indexing are handled within the Mongoose schemas.
