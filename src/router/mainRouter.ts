import { Router } from 'express';
import pingRouter from './pingRouter';
const router = Router();

router.use('/ping', pingRouter);
router.get('/', (req, res) => {
	res.render('main.ejs');
});

export default router;
