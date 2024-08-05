import { Router } from 'express';
const router = Router({ mergeParams: true });

router.get('/', async (req, res) => {
	res.send('<div>This is the error page<div>');
});

export default router;
