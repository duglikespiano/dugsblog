import fs from 'fs/promises';
import { marked } from 'marked';
import { markdownRootPath, noDataMessage, templatesTitles } from '../common/commonVariables';
import { Languages, FilenameWithNumber } from '../common/types';

const convertDate = (date: string, language: string) => {
	const sourceDate = date.split('-');
	if (language === 'ko') {
		return `${sourceDate[0]}년 ${sourceDate[1]}월 ${sourceDate[2]}일`;
	} else if (language === 'ja') {
		return `${sourceDate[0]}年 ${sourceDate[1]}月 ${sourceDate[2]}日`;
	} else if (language === 'en') {
		let convertedMonth = '';
		if (sourceDate[1] === '01') {
			convertedMonth = 'Jan';
		} else if (sourceDate[1] === '02') {
			convertedMonth = 'Feb';
		} else if (sourceDate[1] === '03') {
			convertedMonth = 'Mar';
		} else if (sourceDate[1] === '04') {
			convertedMonth = 'Apr';
		} else if (sourceDate[1] === '05') {
			convertedMonth = 'May';
		} else if (sourceDate[1] === '06') {
			convertedMonth = 'Jun';
		} else if (sourceDate[1] === '07') {
			convertedMonth = 'Jul';
		} else if (sourceDate[1] === '08') {
			convertedMonth = 'Aug';
		} else if (sourceDate[1] === '09') {
			convertedMonth = 'Sep';
		} else if (sourceDate[1] === '10') {
			convertedMonth = 'Oct';
		} else if (sourceDate[1] === '11') {
			convertedMonth = 'Nov';
		} else {
			convertedMonth = 'Dec';
		}
		return `${convertedMonth} ${sourceDate[1]} ${sourceDate[0]}`;
	} else {
		return false;
	}
};

export const capitalizeText = (string: string): string => {
	const stringToArray = string.split(' ');
	const convertedStringArray: string[] = [];
	stringToArray.forEach((word) => {
		const convertedWordArray = word.split('');
		convertedWordArray[0] = convertedWordArray[0].toUpperCase();
		convertedStringArray.push(convertedWordArray.join(''));
	});
	return convertedStringArray.join(' ');
};

export const readMarkdownsList = async (language: string, categoryName: string) => {
	const filenames = await fs.readdir(`${markdownRootPath}/${language}/${categoryName}`);
	const filenamesWithNumber: FilenameWithNumber[] = filenames.map((item) => {
		return {
			name: item,
			number: +item.split('_')[0],
		};
	});
	filenamesWithNumber.sort((a, b) => {
		return b.number - a.number;
	});
	let data = '<ul class="articles">';
	for (let element of filenamesWithNumber) {
		const markdown = await fs.readFile(`${markdownRootPath}/${language}/${categoryName}/${element.name}`, 'utf8');
		let date;
		if (language === 'en') {
			date = `${markdown.slice(markdown.search('Date'), markdown.search('Date') + 18)}`;
		} else if (language === 'ko') {
			date = `${markdown.slice(markdown.search('작성일'), markdown.search('작성일') + 16)}`;
		} else if (language === 'ja') {
			date = `${markdown.slice(markdown.search('作成日'), markdown.search('作成日') + 16)}`;
		}
		console.log(date);
		const linkTitle = element.name.split('_').slice(1).join(' ').replace('.md', '');
		data += `
			<li class="article" data-date="${date}">
				<h3>
					<a href="./japanese/${element.name.split('_')[0]}">${linkTitle}</a>
				</h3>
			</li>`;
	}
	data += '</ul>';
	if (data === '<ul class="articles"></ul>') {
		data = `<div class="no-data">${noDataMessage[language]}</div>`;
	}
	return data;
};

export const readOneMarkdown = async (language: string, categoryName: string, param: string) => {
	const filenames = await fs.readdir(`${markdownRootPath}/${language}/${categoryName}`);
	const fileIndex = +filenames.filter((filename) => filename.split('_')[0] === param)[0].split('_')[0] - 1;
	const filename = filenames[fileIndex];
	const markdown = await fs.readFile(`${markdownRootPath}/${language}/${categoryName}/${filename}`, 'utf8');
	let data = '<section class="content">';
	data += await marked.parse(markdown);
	data += '</section>';
	return data;
};

export const renderTemplate = (language: string, categoryName: string) => {
	return `./${language}/${categoryName}.ejs`;
};

export const exportTitle = (categoryName: keyof typeof templatesTitles, language: Languages): string => {
	return templatesTitles[categoryName][language];
};
