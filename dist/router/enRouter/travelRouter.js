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
const categoryName = 'travel';
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filenames = (yield promises_1.default.readdir(`${markdownRootPath}/${language}/${categoryName}`)).sort(function (a, b) {
        return -1;
    });
    let data = '';
    filenames.sort(function (a, b) {
        return 1;
    });
    for (let element of filenames) {
        const linkTitle = element.split('.')[0];
        data += `
			<div class="article">
				<a href="./${categoryName}/${element.split('_')[0]}">${linkTitle}</a>
			</div>`;
    }
    res.render(`./${language}/${categoryName}.ejs`, { data });
}));
router.get('/:param', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const param = req.params.param;
    const filenames = yield promises_1.default.readdir(`${markdownRootPath}/${language}/${categoryName}`);
    const filename = filenames.filter((filename) => filename === param)[0];
    const markdown = yield promises_1.default.readFile(`${markdownRootPath}/${language}/${categoryName}/${filename}`, 'utf8');
    const data = marked_1.marked.parse(markdown);
    res.render(`./${language}/japanese.ejs`, { data });
}));
exports.default = router;
//# sourceMappingURL=travelRouter.js.map