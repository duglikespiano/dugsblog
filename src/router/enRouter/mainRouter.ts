import { Router } from 'express';
import englishRouter from './englishRouter';
import japaneseRouter from './japaneseRouter';
import dailyLivesRouter from './dailyLivesRouter';

const router = Router();

router.get('/', (req, res) => {
	res.render('./en/main.ejs');
});

router.use('/english', englishRouter);
router.use('/japanese', japaneseRouter);
router.use('/dailylives', dailyLivesRouter);

export default router;
