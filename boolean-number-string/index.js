"use strict";
let hasValue = true;
let count = 10;
let single = "hello";
const person = {
    name: {
        first: "Jack",
        last: "Smith",
    },
    age: 21,
};
const fruits = ["Apple", "Banana", "Grape"];
const book = ["business", 1500, true];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE,
};
let anything = true;
anything = "string";
anything = {};
let unionType = 10;
let unionTypes = [10, 20, "hello"];
//Literal型はconst
const apple = "apple";
let clothSize = "large";
const cloth = {
    color: "white",
    size: "small",
};
function add(num1, num2) {
    return num1 + num2;
}
//void型 何も返さない
function sayHello() {
    console.log("hello");
}
const anotherAdd = add;
const doubleNumber = (num) => num * 2;
function doubleAndHandler(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandler(21, (doubleNum) => {
    return doubleNum;
});
