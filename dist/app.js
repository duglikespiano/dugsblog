"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
exports.app = (0, express_1.default)();
dotenv_1.default.config();
exports.app.set('view engine', 'ejs');
exports.app.set('views', path_1.default.join(__dirname, '../public/views'));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use(mainRouter_1.default);
//# sourceMappingURL=app.js.map