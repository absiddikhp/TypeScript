"use strict";
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILER"] = 1] = "FAILER";
    RType[RType["UNAUTHENTICATE"] = 2] = "UNAUTHENTICATE";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response2 = {
    status: 200,
    type: RType.SUCCESS,
    data: [2, 3, 3, 33]
};
console.log(response2);
