"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commonFunctions_1 = require("../common/commonFunctions");
const router = (0, express_1.Router)({ mergeParams: true });
const categoryName = 'english';
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { language } = req.params;
    const data = yield (0, commonFunctions_1.readMarkdownsList)(language, categoryName);
    const template = (0, commonFunctions_1.renderTemplate)(language, categoryName);
    res.render(template, { data, language, title: 'English' });
}));
router.get('/:param', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { language } = req.params;
    const { param } = req.params;
    const data = yield (0, commonFunctions_1.readOneMarkdown)(language, categoryName, param);
    const template = (0, commonFunctions_1.renderTemplate)(language, categoryName);
    res.render(template, { data, language, title: 'English' });
}));
exports.default = router;
//# sourceMappingURL=englishRouter.js.map