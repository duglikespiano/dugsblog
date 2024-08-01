import { Router } from 'express';
import englishRouter from './englishRouter';
import japaneseRouter from './japaneseRouter';

const router = Router();
const language = 'ja';

router.get('/', (req, res) => {
	res.render(`./${language}/main.ejs`, { title: '', language });
});

router.use('/english', englishRouter);
router.use('/japanese', japaneseRouter);

export default router;
