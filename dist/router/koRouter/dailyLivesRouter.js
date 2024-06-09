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
const aws_s3_1 = require("../../aws-s3");
const dotenv_1 = require("../../dotenv");
const router = (0, express_1.Router)();
const language = 'ko';
const categoryName = 'dailylives';
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filenames = yield (0, aws_s3_1.getFilenamesFromS3)();
    let data = '';
    if (filenames) {
        for (let element of filenames) {
            data += `
				<li class="thumbnail" data-filename=${element}>
					<a href="./${categoryName}/${element.split('_')[0]}">
						<img src="${dotenv_1.AWSS3ThumbnailFolderURL}/${element}">
					</a>
				</li>`;
        }
    }
    res.render(`./${language}/${categoryName}.ejs`, { data });
}));
router.get('/:param', (req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
exports.default = router;
//# sourceMappingURL=dailyLivesRouter.js.map