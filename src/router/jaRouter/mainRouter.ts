import { Router } from 'express';
import japaneseRouter from './japaneseRouter';

const router = Router();

router.get('/', (req, res) => {
	res.render('./ja/main.ejs');
});

router.use('/japanese', japaneseRouter);

export default router;
