# Notes Application

This is a simple Notes application built with TypeScript, Express.js, and MongoDB.

## Features

- Create, read, update, and delete notes
- RESTful API endpoints
- MongoDB for data storage

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/NaderMohamed325/notes-app.git
    cd notes-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `config.env` file in the root directory and add your MongoDB connection details:

    ```dotenv
    DATABASE_PASSWORD=your_database_password
    DATABASE_URL=mongodb+srv://your_username:<db_password>@your_cluster.mongodb.net/?retryWrites=true&w=majority&appName=Notes
    ```

## Running the Application

1. Build the project:

    ```bash
    npm run build
    ```

2. Start the server:

    ```bash
    npm start
    ```

3. For development mode with hot-reloading:

    ```bash
    npm run dev
    ```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /notes` - Retrieve all notes
- `POST /notes` - Create a new note
- `PATCH /notes/:id` - Update a note by ID
- `DELETE /notes/:id` - Delete a note by ID

## Project Structure

- `src/app.ts` - Main application setup
- `src/server.ts` - Server setup and start
- `src/models/noteModel.ts` - Mongoose schema and model for notes
- `src/controller/noteController.ts` - Controller functions for handling note operations
- `src/routs/notesRouter.ts` - Routes for notes API

## License

This project is licensed under the MIT License.
