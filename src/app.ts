import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import router from './router/rootRouter';

export const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
app.use(router);
