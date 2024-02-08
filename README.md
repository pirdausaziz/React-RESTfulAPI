## Introduction
This is a simple full stack application with both frontend and backend systems. The frontend is developed using React and leverages a reusable template for consistent and efficient UI development. The backend is developed using Node.js and follows the principles of RESTful API design.

### Frontend

The frontend of this application is built with React. It uses a reusable template, which allows for consistent styling and behavior across different parts of the application. The folder structure contains `component` and `pages`. The `component` directory contains reusable React components while the `pages` directory contains components that correspond to different routes or endpoints.

### Backend

The backend of this application is built with Node.js. It follows the principles of RESTful API design, which makes it easy to interface with from the frontend or other systems. Check out this [website](https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/) to understand the underlying principles.

### Prerequisite

 1. NPM
 2. PostgreSQL

### Initialization

 1. Clone repo `git clone https://github.com/pirdausaziz/React-RESTfulAPI.git`.
 2. In `React-RESTfulAPI` directory run `npm install`.
 3. Create a new database with name `adminDB`.
 4. Run `query_init.sql` using pgAdmin query tool to create table and assign value.
 5. Update Postgres config at `src\api\utils\databaseUtils.js`.
 6. Run `npm start`. Following link should able to be reached:
**Frontend** 
http://localhost:3000/
**API**
http://localhost:3001/api/subject
http://localhost:3001/api/teacher
http://localhost:3001/api/student

### Other Information

 - If you want to run frontend or backend seperately, use following
   command `npm run start:frontend` or `npm run start:backend`.
  - Having some problem? The backend files is only inside `api` folder and `server.js` file. Other than that is frontend file.

### License

This project is licensed under the terms of the MIT license.