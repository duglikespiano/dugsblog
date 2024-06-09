import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import livereload from 'livereload';
import livereloadMiddleware from 'connect-livereload';
import router from './router/rootRouter';

export const app = express();
const liveServer = livereload.createServer({
	exts: ['ejs', 'scss', 'ts', 'css', 'js'],
	debug: true,
});
liveServer.watch(path.join(__dirname, '../public'));
liveServer.server.once('connection', () => {
	liveServer.refresh('/');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
app.use(livereloadMiddleware());
app.use(router);
