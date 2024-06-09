import { Router } from 'express';
import englishRouter from './englishRouter';
import japaneseRouter from './japaneseRouter';

const router = Router();
const language = 'ko';

router.get('/', (req, res) => {
	res.render(`./${language}/main.ejs`);
});

router.use('/english', englishRouter);
router.use('/japanese', japaneseRouter);

export default router;
