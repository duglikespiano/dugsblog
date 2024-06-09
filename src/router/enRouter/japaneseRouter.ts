import { Router } from 'express';
import fs from 'fs/promises';
import { marked } from 'marked';

const router = Router();

const language = 'en';
const markdownRootPath = './public/markdown';
const categoryName = 'japanese';

router.get('/', async (req, res) => {
	const filenames = (await fs.readdir(`${markdownRootPath}/${language}/${categoryName}`)).sort(function (a, b) {
		return -1;
	});

	let data = '';
	filenames.sort(function (a, b) {
		return 1;
	});

	for (let element of filenames) {
		const markdown = await fs.readFile(`${markdownRootPath}/${language}/${categoryName}/${element}`, 'utf8');
		const date = `${markdown.slice(markdown.search('Date'), markdown.search('Date') + 18)}`;
		const linkTitle =
			element.split('_').slice(1).join(' ').replace('.md', '')[0].toUpperCase() +
			element.split('_').slice(1).join(' ').replace('.md', '').substring(1);
		data += `
			<div class="article" data-date=${date}>
				<a href="./japanese/${element.split('_')[0]}">${linkTitle}</a>
			</div>`;
	}

	res.render(`./${language}/${categoryName}.ejs`, { data });
});

router.get('/:param', async (req, res) => {
	const param = req.params.param;

	const filenames = await fs.readdir(`${markdownRootPath}/${language}/${categoryName}`);
	const fileIndex = +filenames.filter((filename) => filename.split('_')[0] === param)[0].split('_')[0] - 1;
	const filename = filenames[fileIndex];
	const markdown = await fs.readFile(`${markdownRootPath}/${language}/${categoryName}/${filename}`, 'utf8');
	const data = marked.parse(markdown);

	res.render(`./${language}/japanese.ejs`, { data });
});

export default router;
