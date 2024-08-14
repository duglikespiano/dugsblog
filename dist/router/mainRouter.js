"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)({ mergeParams: true });
const commonVariables_1 = require("../common/commonVariables");
const commonFunctions_1 = require("../common/commonFunctions");
const categoryName = 'main';
router.get('/', (req, res) => {
    const { language } = req.params;
    if (language === 'favicon.ico') {
        return;
    }
    if (commonVariables_1.languages.findIndex((item) => item === language) > -1) {
        const url = req.baseUrl;
        const title = (0, commonFunctions_1.exportTitle)(categoryName, language);
        const ogpInformation = (0, commonFunctions_1.generateOGPinfomation)(language, url);
        res.render(`./${language}/main.ejs`, { title, language, ogpInformation });
    }
    else {
        res.send('<div>This is the error page<div>');
    }
});
exports.default = router;
//# sourceMappingURL=mainRouter.js.map