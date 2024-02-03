import { Request, Response, NextFunction } from 'express';

export const languageRedirectMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const userLanguage = req.headers['accept-language'] ? req.headers['accept-language'].slice(0, 2) : 'en';
	if (userLanguage.includes('ko')) {
		res.redirect('/ko');
	} else if (userLanguage.includes('ja')) {
		res.redirect('/ja');
	} else {
		res.redirect('/en');
	}
};
