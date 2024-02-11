import { Router } from 'express';
import fs from 'fs/promises';
import { marked } from 'marked';

const router = Router();

const language = 'en';
const markdownRootPath = './public/markdown';
const categoryName = 'travel';

router.get('/', async (req, res) => {
	const filenames = (await fs.readdir(`${markdownRootPath}/${language}/${categoryName}`)).sort(function (a, b) {
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
});

router.get('/:param', async (req, res) => {
	const param = req.params.param;
	const filenames = await fs.readdir(`${markdownRootPath}/${language}/${categoryName}`);
	const filename = filenames.filter((filename) => filename === param)[0];
	const markdown = await fs.readFile(`${markdownRootPath}/${language}/${categoryName}/${filename}`, 'utf8');
	const data = marked.parse(markdown);

	res.render(`./${language}/japanese.ejs`, { data });
});

export default router;
