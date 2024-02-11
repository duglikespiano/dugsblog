import { Router } from 'express';
import testRouter from './testRouter';
import enRouter from './enRouter/mainRouter';
import koRouter from './koRouter/mainRouter';
import jaRouter from './jaRouter/mainRouter';
import { languageRedirectMiddleware } from '../middleware/languageRedirectMiddleware';

const router = Router();

router.use('/test', testRouter);
router.use('/en', enRouter);
router.use('/ko', koRouter);
router.use('/ja', jaRouter);

router.get('/', languageRedirectMiddleware);

export default router;
