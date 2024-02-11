"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const japaneseRouter_1 = __importDefault(require("./japaneseRouter"));
const dailyLivesRouter_1 = __importDefault(require("./dailyLivesRouter"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('./en/main.ejs');
});
router.use('/japanese', japaneseRouter_1.default);
router.use('/dailylives', dailyLivesRouter_1.default);
exports.default = router;
//# sourceMappingURL=mainRouter.js.map