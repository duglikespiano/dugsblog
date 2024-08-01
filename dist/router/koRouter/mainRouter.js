"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const englishRouter_1 = __importDefault(require("./englishRouter"));
const japaneseRouter_1 = __importDefault(require("./japaneseRouter"));
const router = (0, express_1.Router)();
const language = 'ko';
router.get('/', (req, res) => {
    res.render(`./${language}/main.ejs`, { title: '', language });
});
router.use('/english', englishRouter_1.default);
router.use('/japanese', japaneseRouter_1.default);
exports.default = router;
//# sourceMappingURL=mainRouter.js.map