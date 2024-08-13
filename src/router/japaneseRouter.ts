import { Router } from 'express';
const router = Router({ mergeParams: true });
import { Language, LanguagesCode } from '../common/types';
import {
	readMarkdownsList,
	readOneMarkdown,
	renderTemplate,
	exportTitle,
	generateOGPinfomation,
} from '../common/commonFunctions';
const categoryName = 'japanese';

router.get('/', async (req, res) => {
	const { language } = req.params as Language;
	const url = req.baseUrl;
	const data = await readMarkdownsList(language, categoryName);
	const template = renderTemplate(language, categoryName);
	const title = exportTitle(categoryName, language as LanguagesCode);
	const ogpInformation = generateOGPinfomation(language as LanguagesCode, url);
	res.render(template, { data, language, title, ogpInformation });
});

router.get('/:param', async (req, res) => {
	const { language } = req.params as unknown as Language;
	const { param } = req.params;
	const url = req.baseUrl;
	const data = await readOneMarkdown(language, categoryName, param);
	const template = renderTemplate(language, categoryName);
	const title = exportTitle(categoryName, language as LanguagesCode);
	const ogpInformation = generateOGPinfomation(language as LanguagesCode, url);
	res.render(template, { data, language, title, ogpInformation });
});

export default router;
