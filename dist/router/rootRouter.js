"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pingRouter_1 = __importDefault(require("./pingRouter"));
const mainRouter_1 = __importDefault(require("./enRouter/mainRouter"));
const mainRouter_2 = __importDefault(require("./koRouter/mainRouter"));
const mainRouter_3 = __importDefault(require("./jaRouter/mainRouter"));
const languageRedirectMiddleware_1 = require("../middleware/languageRedirectMiddleware");
const router = (0, express_1.Router)();
router.use('/ping', pingRouter_1.default);
router.use('/en', mainRouter_1.default);
router.use('/ko', mainRouter_2.default);
router.use('/ja', mainRouter_3.default);
router.get('/', languageRedirectMiddleware_1.languageRedirectMiddleware);
exports.default = router;
//# sourceMappingURL=rootRouter.js.map