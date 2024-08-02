"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)({ mergeParams: true });
router.get('/', (req, res) => {
    const { language } = req.params;
    if (language === 'favicon.ico') {
        return;
    }
    else {
        res.render(`./${language}/main.ejs`, { title: '', language });
    }
});
exports.default = router;
//# sourceMappingURL=mainRouter.js.map