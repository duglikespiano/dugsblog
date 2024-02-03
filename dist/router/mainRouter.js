"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pingRouter_1 = __importDefault(require("./pingRouter"));
const englishRouter_1 = __importDefault(require("./englishRouter"));
const koreanRouter_1 = __importDefault(require("./koreanRouter"));
const japaneseRouter_1 = __importDefault(require("./japaneseRouter"));
const languageRedirectMiddleware_1 = require("../middleware/languageRedirectMiddleware");
const router = (0, express_1.Router)();
router.use('/ping', pingRouter_1.default);
router.use('/en', englishRouter_1.default);
router.use('/ko', koreanRouter_1.default);
router.use('/ja', japaneseRouter_1.default);
router.get('/', languageRedirectMiddleware_1.languageRedirectMiddleware);
exports.default = router;
//# sourceMappingURL=mainRouter.js.map