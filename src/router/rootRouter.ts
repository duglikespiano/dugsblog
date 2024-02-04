import { Router } from 'express';
import pingRouter from './pingRouter';
import enRouter from './enRouter/mainRouter';
import koRouter from './koRouter/mainRouter';
import jaRouter from './jaRouter/mainRouter';
import { languageRedirectMiddleware } from '../middleware/languageRedirectMiddleware';

const router = Router();

router.use('/ping', pingRouter);
router.use('/en', enRouter);
router.use('/ko', koRouter);
router.use('/ja', jaRouter);

router.get('/', languageRedirectMiddleware);

export default router;
