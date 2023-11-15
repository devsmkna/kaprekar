/* Check if a number is valid, has at least two different ciphers */
const isValid = (num : string) : boolean => new Set(num).size > 1 && num.length < 5;

/* Return the rearrenged number as the lowest value made of the same ciphers in a different order */
const getLowest = (num : string) : string => num.toString().split("").sort().join("");

/* Return the rearrenged number as the highest value made of the same ciphers in a different order */
const getHighest = (num : string) : string => num.toString().split("").sort((a: string, b: string) => b.localeCompare(a)).join("");

export const keprekar = (num : number | string, iteration? : number) : number => {
    num = String(num).padStart(4, '0');
    if (!isValid(num)) return -1;
    if (num == "6174") return (iteration ? iteration : 0);
    return keprekar(Number(getHighest(num)) - Number(getLowest(num)), (iteration ? iteration : 0) + 1);
}