import { Router } from 'express';
import fs from 'fs/promises';
import { marked } from 'marked';

const router = Router();

router.get('/', async (req, res) => {
	const filenames = (await fs.readdir('./public/markdown/en/japanese')).sort(function (a, b) {
		return -1;
	});

	let HTMLString = '';
	filenames.sort(function (a, b) {
		return 1;
	});

	for (let element of filenames) {
		const markdown = await fs.readFile(`./public/markdown/en/japanese/${element}`, 'utf8');
		const date = `${markdown.slice(markdown.search('Date'), markdown.search('Date') + 18)}`;
		HTMLString += `
			<div class="article" data-date=${date}>
				<a href="./japanese/${element.split('_')[0]}">${element.split('_').slice(1).join(' ').replace('.md', '')}</a>
			</div>`;
	}

	res.render('./en/japaneseMain.ejs', { data: HTMLString });
});

router.get('/:param', async (req, res) => {
	const param = req.params.param;

	const filenames = await fs.readdir('./public/markdown/en/japanese');
	const fileIndex = +filenames.filter((filename) => filename.split('_')[0] === param)[0].split('_')[0] - 1;
	const filename = filenames[fileIndex];
	const markdown = await fs.readFile(`./public/markdown/en/japanese/${filename}`, 'utf8');
	const HTMLparsedFromMarkdown = marked.parse(markdown);

	res.render('./en/japaneseArticle.ejs', { data: HTMLparsedFromMarkdown });
});

export default router;
