"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArray = exports.test = void 0;
var lodash_1 = require("lodash");
var test = function (name) {
    if (name === void 0) { name = "abc"; }
    console.log("testing 123 successfully", name);
};
exports.test = test;
exports.checkArray = lodash_1.isArray;
