import express from 'express';
import dotenv from 'dotenv';
import router from './router/mainRouter';
export const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
