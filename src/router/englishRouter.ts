import { Router } from 'express';
import { Language } from '../common/types';
import { readMarkdownsList, readOneMarkdown } from '../common/commonFunctions';
const router = Router({ mergeParams: true });
const categoryName = 'english';

router.get('/', async (req, res) => {
	const { language } = req.params as Language;
	const data = await readMarkdownsList(language, categoryName);
	res.render(`./${language}/${categoryName}.ejs`, { data, language, title: 'English' });
});

router.get('/:param', async (req, res) => {
	const { language } = req.params as unknown as Language;
	const { param } = req.params;
	const data = await readOneMarkdown(language, categoryName, param);
	res.render(`./${language}/${categoryName}.ejs`, { data, language, title: 'English' });
});

export default router;
