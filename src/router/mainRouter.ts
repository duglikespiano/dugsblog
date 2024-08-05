import { Router } from 'express';
const router = Router({ mergeParams: true });
import { languages } from '../common/commonVariables';
import { Language } from '../common/types';

router.get('/', (req, res) => {
	const { language } = req.params as Language;
	if (language === 'favicon.ico') {
		return;
	} else if (languages.findIndex((item) => item === language) > -1) {
		res.render(`./${language}/main.ejs`, { title: '', language });
	} else {
		res.send('<div>This is the error page<div>');
	}
});

export default router;
