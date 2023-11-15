"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
/* Assert the number passed to the function return an expected value */
const assertNumber = (num, expected) => {
    if ((0, _1.keprekar)(num) === expected) {
        console.log("test passed!");
        return true;
    }
    console.log("test failed! Expected [" + expected + "], got [" + (0, _1.keprekar)(num) + "]");
    return false;
};
/* WRONG VALUES PASSED */
assertNumber(0, -1);
assertNumber(1111, -1);
assertNumber(12345, -1);
/* WRONG VALUE PASSED - ONLY FOR v1.0.0 (*) */
/*
    (*) v1.0.0 support only 4 cipher numbers, v2.0.0 support up to 4 cypher
*/
/*
assertNumber(12, -1);
assertNumber(100, -1);
assertNumber(102, -1);
assertNumber(1000, -1);
assertNumber(1010, -1);
*/
/* CORRECT VALUES PASSED */
assertNumber(6174, 0);
assertNumber(8991, 3);
assertNumber(1459, 3);
/* CORRECT VALUES PASSED - ONLY FOR v2.0.0 */
assertNumber(1, 5);
assertNumber(21, 3);
assertNumber(2111, 5);
