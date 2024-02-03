import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.render('./ja/main.ejs');
});

export default router;
