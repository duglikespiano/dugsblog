import { Router } from 'express';
import { Language, Languages } from '../common/types';
import { readMarkdownsList, readOneMarkdown, renderTemplate, exportTitle } from '../common/commonFunctions';
const router = Router({ mergeParams: true });
const categoryName = 'japanese';

router.get('/', async (req, res) => {
	const { language } = req.params as Language;
	const data = await readMarkdownsList(language, categoryName);
	const template = renderTemplate(language, categoryName);
	const title = exportTitle(categoryName, language as Languages);
	res.render(template, { data, language, title });
});

router.get('/:param', async (req, res) => {
	const { language } = req.params as unknown as Language;
	const { param } = req.params;
	const data = await readOneMarkdown(language, categoryName, param);
	const template = renderTemplate(language, categoryName);
	const title = exportTitle(categoryName, language as Languages);
	res.render(template, { data, language, title });
});

export default router;
