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
const router = (0, express_1.Router)({ mergeParams: true });
const commonFunctions_1 = require("../common/commonFunctions");
const categoryName = 'japanese';
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { language } = req.params;
    const url = req.baseUrl;
    const data = yield (0, commonFunctions_1.readMarkdownsList)(language, categoryName);
    const template = (0, commonFunctions_1.renderTemplate)(language, categoryName);
    const title = (0, commonFunctions_1.exportTitle)(categoryName, language);
    const ogpInformation = (0, commonFunctions_1.generateOGPinfomation)(language, url);
    res.render(template, { data, language, title, ogpInformation });
}));
router.get('/:param', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { language } = req.params;
    const { param } = req.params;
    const url = req.baseUrl;
    const data = yield (0, commonFunctions_1.readOneMarkdown)(language, categoryName, param);
    const template = (0, commonFunctions_1.renderTemplate)(language, categoryName);
    const title = (0, commonFunctions_1.exportTitle)(categoryName, language);
    const ogpInformation = (0, commonFunctions_1.generateOGPinfomation)(language, url);
    res.render(template, { data, language, title, ogpInformation });
}));
exports.default = router;
//# sourceMappingURL=japaneseRouter.js.map