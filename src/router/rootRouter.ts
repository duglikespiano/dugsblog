import { Router } from 'express';
import mainRouter from './mainRouter';
import japaneseRouter from './japaneseRouter';
import englishRouter from './englishRouter';
import daysRouter from './daysRouter';
import noPageRouter from './noPageRouter';
import { languageRedirectMiddleware } from '../middleware/languageRedirectMiddleware';

const router = Router();

router.use('/:language', mainRouter);
router.use('/:language/english', englishRouter);
router.use('/:language/japanese', japaneseRouter);
router.use('/:language/days', daysRouter);
router.get('/', languageRedirectMiddleware);
router.use('*', noPageRouter);

export default router;
