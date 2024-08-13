import { Router } from 'express';
const router = Router({ mergeParams: true });
import { languages } from '../common/commonVariables';
import { exportTitle, generateOGPinfomation } from '../common/commonFunctions';
import { Language, LanguagesCode } from '../common/types';
const categoryName = 'main';

router.get('/', (req, res) => {
	const { language } = req.params as Language;
	const url = req.baseUrl;
	const title = exportTitle(categoryName, language as LanguagesCode);
	const ogpInformation = generateOGPinfomation(language as LanguagesCode, url);
	if (language === 'favicon.ico') {
		return;
	} else if (languages.findIndex((item) => item === language) > -1) {
		res.render(`./${language}/main.ejs`, { title, language, ogpInformation });
	} else {
		res.send('<div>This is the error page<div>');
	}
});

export default router;
