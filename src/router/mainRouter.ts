import { Router } from 'express';
const router = Router({ mergeParams: true });
import { languages } from '../common/commonVariables';
import { exportTitle, generateOGPinfomation } from '../common/commonFunctions';
import { Language, LanguagesCode } from '../common/types';
const categoryName = 'main';

router.get('/', (req, res) => {
	const { language } = req.params as Language;
	if (language === 'favicon.ico') {
		return;
	}
	if (languages.findIndex((item) => item === language) > -1) {
		const url = req.baseUrl;
		const title = exportTitle(categoryName, language as LanguagesCode);
		const ogpInformation = generateOGPinfomation(language as LanguagesCode, url);
		res.render(`./${language}/main.ejs`, { title, language, ogpInformation });
	} else {
		res.send('<div>This is the error page<div>');
	}
});

export default router;
