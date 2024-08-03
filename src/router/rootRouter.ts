import { Router } from 'express';
import mainRouter from './mainRouter';
import japaneseRouter from './japaneseRouter';
import testRouter from './testRouter';
import { languageRedirectMiddleware } from '../middleware/languageRedirectMiddleware';

const router = Router();

router.use('/:language', mainRouter);
router.use('/:language/japanese', japaneseRouter);
router.use('/test', testRouter);
router.get('/', languageRedirectMiddleware);

export default router;
