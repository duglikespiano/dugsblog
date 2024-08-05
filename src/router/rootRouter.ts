import { Router } from 'express';
import mainRouter from './mainRouter';
import japaneseRouter from './japaneseRouter';
import englishRouter from './englishRouter';
import noPageRouter from './noPageRouter';
import testRouter from './testRouter';
import { languageRedirectMiddleware } from '../middleware/languageRedirectMiddleware';

const router = Router();

router.use('/:language', mainRouter);
router.use('/:language/english', englishRouter);
router.use('/:language/japanese', japaneseRouter);
router.use('/test', testRouter);
router.get('/', languageRedirectMiddleware);
router.use('*', noPageRouter);

export default router;
