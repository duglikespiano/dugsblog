"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FsError = void 0;
class FsError extends Error {
    constructor(errno) {
        super();
        this.errno = errno;
    }
}
exports.FsError = FsError;
//# sourceMappingURL=types.js.map