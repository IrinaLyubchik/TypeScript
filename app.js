"use strict";
//string
let myName = 'Max';
//number
let myAge = 39.85;
// boolean
let hasHobbies = true;
// assign types
let myRealAge;
myRealAge = 39;
// array
let hobbies = ["Cooking", "Sports"];
hobbies = [100];
// tuples
let address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
//any
let car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
//function types
let myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(6, 8));
//objects
let userData = {
    name: "Max",
    age: 39
};
//complex object
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
let complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union
let meRealRealAge = 27;
meRealRealAge = "27";
//check types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never
function neverReturns() {
    throw new Error('An error');
}
//nullable types
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;
