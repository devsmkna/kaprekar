"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keprekar = void 0;
/* Check if a number is valid, has at least two different ciphers */
const isValid = (num) => new Set(num).size > 1 && num.length < 5;
/* Return the rearrenged number as the lowest value made of the same ciphers in a different order */
const getLowest = (num) => num.toString().split("").sort().join("");
/* Return the rearrenged number as the highest value made of the same ciphers in a different order */
const getHighest = (num) => num.toString().split("").sort((a, b) => b.localeCompare(a)).join("");
const keprekar = (num, iteration) => {
    num = String(num).padStart(4, '0');
    if (!isValid(num))
        return -1;
    if (num == "6174")
        return (iteration ? iteration : 0);
    return (0, exports.keprekar)(Number(getHighest(num)) - Number(getLowest(num)), (iteration ? iteration : 0) + 1);
};
exports.keprekar = keprekar;
