import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//@ts-ignore
import notesRouter from "../routs/notesRouter";

const app = express();


dotenv.config({path: '../config.env'});

const databaseUrl = process.env.DATABASE_URL;
const databasePassword = process.env.DATABASE_PASSWORD;

if (!databaseUrl || !databasePassword) {
    throw new Error('Database URL or password is not defined in the environment variables');
}

const DB = databaseUrl.replace('<db_password>', databasePassword);

mongoose
    .connect(DB)
    .then(() => {
        console.log('DB connection successful');
    })
    .catch((err) => console.error('DB connection error:', err));

app.use('/notes', notesRouter);

export default app;