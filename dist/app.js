"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const livereload_1 = __importDefault(require("livereload"));
const connect_livereload_1 = __importDefault(require("connect-livereload"));
const rootRouter_1 = __importDefault(require("./router/rootRouter"));
exports.app = (0, express_1.default)();
const liveServer = livereload_1.default.createServer({
    exts: ['ejs', 'css', 'js'],
});
liveServer.watch(path_1.default.join(__dirname, '../public'));
liveServer.server.once('connection', () => {
    liveServer.refresh('/');
});
exports.app.set('view engine', 'ejs');
exports.app.set('views', path_1.default.join(__dirname, '../public/views'));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use((0, connect_livereload_1.default)());
exports.app.use(rootRouter_1.default);
//# sourceMappingURL=app.js.map