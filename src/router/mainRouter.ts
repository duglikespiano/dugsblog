import { Router } from 'express';
const router = Router({ mergeParams: true });
type Language = {
	language: string;
};

router.get('/', (req, res) => {
	const { language } = req.params as Language;
	if (language === 'favicon.ico') {
		return;
	} else {
		res.render(`./${language}/main.ejs`, { title: '', language });
	}
});

export default router;
