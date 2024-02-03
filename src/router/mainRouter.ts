import { Router } from 'express';
import fs from 'fs/promises';
import marked from 'marked';
import pingRouter from './pingRouter';
import englishRouter from './englishRouter';
import koreanRouter from './koreanRouter';
import japaneseRouter from './japaneseRouter';

const router = Router();

router.use('/ping', pingRouter);
router.use('/en', englishRouter);
router.use('/ko', koreanRouter);
router.use('/ja', japaneseRouter);

router.get('/', async (req, res) => {
	try {
		const markdownFileContent = await fs.readFile('./public/markdown/dummy.md', 'utf8');
		const HTMLParsedMarkdownContent = marked.parse(markdownFileContent);
		res.render('main.ejs', {
			data: HTMLParsedMarkdownContent,
		});
	} catch (error) {}
});

export default router;
