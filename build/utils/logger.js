"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger = function (err, req, res) {
    console.error(err.message);
    return err.message ? err.message : '';
};
exports.logger = logger;
//# sourceMappingURL=logger.js.map