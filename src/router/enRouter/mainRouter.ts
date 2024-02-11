import { Router } from 'express';
import japaneseRouter from './japaneseRouter';
import dailyLivesRouter from './dailyLivesRouter';

const router = Router();

router.get('/', (req, res) => {
	res.render('./en/main.ejs');
});

router.use('/japanese', japaneseRouter);
router.use('/pictures', dailyLivesRouter);

export default router;
