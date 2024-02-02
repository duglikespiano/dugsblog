import { Router } from 'express';
import fs from 'fs/promises';
import pingRouter from './pingRouter';
const router = Router();

router.use('/ping', pingRouter);
router.get('/', async (req, res) => {
	try {
		const data = await fs.readFile('./public/markdown/dummy.md', 'utf8');
		res.render('main.ejs');
	} catch (error) {}
});

export default router;
