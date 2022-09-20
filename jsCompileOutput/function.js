"use strict";
const myFunc = (a, b = 10) => {
    return a + b;
};
console.log(myFunc(2, 20));
