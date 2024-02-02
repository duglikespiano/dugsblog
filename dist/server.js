"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateServer = void 0;
const app_1 = require("./app");
const dotenv_1 = require("./dotenv");
const initiateServer = () => {
    app_1.app.listen(dotenv_1.port, '0.0.0.0', () => {
        if (!dotenv_1.port) {
            throw new Error('PORT INVALID');
        }
        else {
            console.log(`SERVER IS LISTENING ON PORT ${dotenv_1.port}!`);
        }
    });
};
exports.initiateServer = initiateServer;
//# sourceMappingURL=server.js.map