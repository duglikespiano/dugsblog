"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainRouter_1 = __importDefault(require("./mainRouter"));
const japaneseRouter_1 = __importDefault(require("./japaneseRouter"));
const englishRouter_1 = __importDefault(require("./englishRouter"));
const noPageRouter_1 = __importDefault(require("./noPageRouter"));
const testRouter_1 = __importDefault(require("./testRouter"));
const languageRedirectMiddleware_1 = require("../middleware/languageRedirectMiddleware");
const router = (0, express_1.Router)();
router.use('/:language', mainRouter_1.default);
router.use('/:language/english', englishRouter_1.default);
router.use('/:language/japanese', japaneseRouter_1.default);
router.use('/test', testRouter_1.default);
router.get('/', languageRedirectMiddleware_1.languageRedirectMiddleware);
router.use('*', noPageRouter_1.default);
exports.default = router;
//# sourceMappingURL=rootRouter.js.map