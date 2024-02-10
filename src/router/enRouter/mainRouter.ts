import { Router } from 'express';
import japaneseRouter from './japaneseRouter';
import travelRouter from './travelRouter';

const router = Router();

router.get('/', (req, res) => {
	res.render('./en/main.ejs');
});

router.use('/japanese', japaneseRouter);
router.use('/travel', travelRouter);

export default router;
