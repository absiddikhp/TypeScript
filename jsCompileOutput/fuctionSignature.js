"use strict";
let Add;
Add = (a, b, action) => {
    if (action === "=")
        return a + b;
    return a - b;
};
let rs = Add(20, 40, "=");
console.log(rs);
