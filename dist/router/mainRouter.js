"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pingRouter_1 = __importDefault(require("./pingRouter"));
const router = (0, express_1.Router)();
router.use('/ping', pingRouter_1.default);
router.get('/', (req, res) => {
    res.render('main.ejs');
});
exports.default = router;
//# sourceMappingURL=mainRouter.js.map