import { Router } from 'express';
import pingRouter from './pingRouter';
import englishRouter from './englishRouter';
import koreanRouter from './koreanRouter';
import japaneseRouter from './japaneseRouter';
import { languageRedirectMiddleware } from '../middleware/languageRedirectMiddleware';

const router = Router();

router.use('/ping', pingRouter);
router.use('/en', englishRouter);
router.use('/ko', koreanRouter);
router.use('/ja', japaneseRouter);

router.get('/', languageRedirectMiddleware);

export default router;
