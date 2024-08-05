"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)({ mergeParams: true });
const commonVariables_1 = require("../common/commonVariables");
router.get('/', (req, res) => {
    const { language } = req.params;
    if (language === 'favicon.ico') {
        return;
    }
    else if (commonVariables_1.languages.findIndex((item) => item === language) > -1) {
        res.render(`./${language}/main.ejs`, { title: '', language });
    }
    else {
        res.send('<div>This is the error page<div>');
    }
});
exports.default = router;
//# sourceMappingURL=mainRouter.js.map