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
exports.readOneMarkdown = exports.readMarkdownsList = exports.capitalizeText = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const marked_1 = require("marked");
const commonVariables_1 = require("../common/commonVariables");
const convertDate = (date, language) => {
    const sourceDate = date.split('-');
    if (language === 'ko') {
        return `${sourceDate[0]}년 ${sourceDate[1]}월 ${sourceDate[2]}일`;
    }
    else if (language === 'ja') {
        return `${sourceDate[0]}年 ${sourceDate[1]}月 ${sourceDate[2]}日`;
    }
    else if (language === 'en') {
        let convertedMonth = '';
        if (sourceDate[1] === '01') {
            convertedMonth = 'Jan';
        }
        else if (sourceDate[1] === '02') {
            convertedMonth = 'Feb';
        }
        else if (sourceDate[1] === '03') {
            convertedMonth = 'Mar';
        }
        else if (sourceDate[1] === '04') {
            convertedMonth = 'Apr';
        }
        else if (sourceDate[1] === '05') {
            convertedMonth = 'May';
        }
        else if (sourceDate[1] === '06') {
            convertedMonth = 'Jun';
        }
        else if (sourceDate[1] === '07') {
            convertedMonth = 'Jul';
        }
        else if (sourceDate[1] === '08') {
            convertedMonth = 'Aug';
        }
        else if (sourceDate[1] === '09') {
            convertedMonth = 'Sep';
        }
        else if (sourceDate[1] === '10') {
            convertedMonth = 'Oct';
        }
        else if (sourceDate[1] === '11') {
            convertedMonth = 'Nov';
        }
        else {
            convertedMonth = 'Dec';
        }
        return `${convertedMonth} ${sourceDate[1]} ${sourceDate[0]}`;
    }
    else {
        return false;
    }
};
const capitalizeText = (string) => {
    const stringToArray = string.split(' ');
    const convertedStringArray = [];
    stringToArray.forEach((word) => {
        const convertedWordArray = word.split('');
        convertedWordArray[0] = convertedWordArray[0].toUpperCase();
        convertedStringArray.push(convertedWordArray.join(''));
    });
    return convertedStringArray.join(' ');
};
exports.capitalizeText = capitalizeText;
const readMarkdownsList = (language, categoryName) => __awaiter(void 0, void 0, void 0, function* () {
    const filenames = (yield promises_1.default.readdir(`${commonVariables_1.markdownRootPath}/${language}/${categoryName}`)).sort(function (a, b) {
        return -1;
    });
    let data = '<ul class="articles">';
    filenames.sort(function (a, b) {
        return 1;
    });
    for (let element of filenames) {
        const markdown = yield promises_1.default.readFile(`${commonVariables_1.markdownRootPath}/${language}/${categoryName}/${element}`, 'utf8');
        const date = `${markdown.slice(markdown.search('Date'), markdown.search('Date') + 18)}`;
        const linkTitle = element.split('_').slice(1).join(' ').replace('.md', '');
        data += `
			<li class="article" data-date=${date}>
				<a href="./japanese/${element.split('_')[0]}">${linkTitle}</a>
			</li>`;
    }
    data += '</ul>';
    if (data === '<ul class="articles"></ul>') {
        data = `<div class="no-data">${commonVariables_1.noDataMessage[language]}</div>`;
    }
    return data;
});
exports.readMarkdownsList = readMarkdownsList;
const readOneMarkdown = (language, categoryName, param) => __awaiter(void 0, void 0, void 0, function* () {
    const filenames = yield promises_1.default.readdir(`${commonVariables_1.markdownRootPath}/${language}/${categoryName}`);
    const fileIndex = +filenames.filter((filename) => filename.split('_')[0] === param)[0].split('_')[0] - 1;
    const filename = filenames[fileIndex];
    const markdown = yield promises_1.default.readFile(`${commonVariables_1.markdownRootPath}/${language}/${categoryName}/${filename}`, 'utf8');
    const data = yield marked_1.marked.parse(markdown);
    return data;
});
exports.readOneMarkdown = readOneMarkdown;
//# sourceMappingURL=commonFunctions.js.map