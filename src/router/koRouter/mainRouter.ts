import { Router } from 'express';
import japaneseRouter from './japaneseRouter';

const router = Router();

router.get('/', (req, res) => {
	res.render('./ko/main.ejs');
});

router.use('/japanese', japaneseRouter);

export default router;
