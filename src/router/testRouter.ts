import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	res.send('<div>hihi<div>');
});

export default router;
