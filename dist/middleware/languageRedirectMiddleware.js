"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.languageRedirectMiddleware = void 0;
const languageRedirectMiddleware = (req, res) => {
    const userLanguage = req.headers['accept-language'] ? req.headers['accept-language'].slice(0, 2) : 'en';
    if (userLanguage.includes('ko')) {
        res.redirect('/ko');
    }
    else if (userLanguage.includes('ja')) {
        res.redirect('/ja');
    }
    else {
        res.redirect('/en');
    }
};
exports.languageRedirectMiddleware = languageRedirectMiddleware;
//# sourceMappingURL=languageRedirectMiddleware.js.map