"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const promises_1 = __importDefault(require("fs/promises"));
const marked_1 = require("marked");
const router = (0, express_1.Router)();
const language = 'en';
const markdownRootPath = './public/markdown';
const categoryName = 'english';
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filenames = (yield promises_1.default.readdir(`${markdownRootPath}/${language}/${categoryName}`)).sort(function (a, b) {
        return -1;
    });
    let data = '';
    filenames.sort(function (a, b) {
        return 1;
    });
    for (let element of filenames) {
        const markdown = yield promises_1.default.readFile(`${markdownRootPath}/${language}/${categoryName}/${element}`, 'utf8');
        const date = `${markdown.slice(markdown.search('Date'), markdown.search('Date') + 18)}`;
        const linkTitle = element.split('_').slice(1).join(' ').replace('.md', '');
        data += `
			<div class="article" data-date=${date}>
				<a href="./japanese/${element.split('_')[0]}">${linkTitle}</a>
			</div>`;
    }
    res.render(`./${language}/japanese.ejs`, { data });
}));
router.get('/:param', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const param = req.params.param;
    const filenames = yield promises_1.default.readdir(`${markdownRootPath}/${language}/${categoryName}`);
    const fileIndex = +filenames.filter((filename) => filename.split('_')[0] === param)[0].split('_')[0] - 1;
    const filename = filenames[fileIndex];
    const markdown = yield promises_1.default.readFile(`${markdownRootPath}/${language}/${categoryName}/${filename}`, 'utf8');
    const data = marked_1.marked.parse(markdown);
    res.render(`./${language}/japanese.ejs`, { data });
}));
exports.default = router;
//# sourceMappingURL=englishRouter.js.map