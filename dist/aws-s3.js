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
exports.getFilenamesFromS3 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv_1 = require("./dotenv");
const client = new client_s3_1.S3Client({
    region: dotenv_1.AWSRegion,
    credentials: {
        accessKeyId: dotenv_1.AWSAccessKeyId,
        secretAccessKey: dotenv_1.AWSSecretAccessKey,
    },
});
const getFilenamesFromS3 = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const command = new client_s3_1.ListObjectsV2Command({
        Bucket: dotenv_1.AWSBucket,
    });
    try {
        let isTruncated = true;
        let resultArray = [];
        while (isTruncated) {
            const { Contents, IsTruncated, NextContinuationToken } = yield client.send(command);
            if (Contents) {
                for (let element of Contents) {
                    if (((_a = element.Key) === null || _a === void 0 ? void 0 : _a.split('/')[2]) !== undefined && ((_b = element.Key) === null || _b === void 0 ? void 0 : _b.split('/')[2]) !== '') {
                        resultArray.push((_c = element.Key) === null || _c === void 0 ? void 0 : _c.split('/')[2]);
                    }
                }
            }
            isTruncated = IsTruncated;
            command.input.ContinuationToken = NextContinuationToken;
        }
        resultArray.sort(function (a, b) {
            return -1;
        });
        return resultArray;
    }
    catch (err) {
        console.error(err);
    }
});
exports.getFilenamesFromS3 = getFilenamesFromS3;
//# sourceMappingURL=aws-s3.js.map