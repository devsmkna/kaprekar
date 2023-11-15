# Kaprekar's Routine

In number theory, Kaprekar's routine is an iterative algorithm named after its inventor, Indian mathematician *D. R. Kaprekar*. Each iteration starts with a number, sorts the digits into descending and ascending order, and calculates the difference between the two new numbers.

As an example, starting with the number **8991** in base 10:

9981 – 1899 = 8082

8820 – 0288 = 8532

8532 – 2358 = **6174**

7641 – 1467 = **6174**

6174, known as **Kaprekar's constant**, is a fixed point of this algorithm. The only four-digit numbers for which Kaprekar's routine does not reach 6174 are **repeated digits** such as 1111, which give the result 0000 after a single iteration.

This package returns the **number of iterations** needed to reach the Kaprekar's constant starting from a given number. *Four repeated digits will returns -1.*



# Install

```bash
npm install kaprekar
```

# Usage

```js
var kaprekar = require('kaprekar');

kaprekar(1111); // -> -1
kaprekar(6174); // -> 0
kaprekar(8991); // -> 3

```