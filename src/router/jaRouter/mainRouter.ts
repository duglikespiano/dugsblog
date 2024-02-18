import { Router } from 'express';
import englishRouter from './englishRouter';
import japaneseRouter from './japaneseRouter';

const router = Router();

router.get('/', (req, res) => {
	res.render('./ja/main.ejs');
});

router.use('/english', englishRouter);
router.use('/japanese', japaneseRouter);

export default router;
