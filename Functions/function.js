"use strict";
var addtwo = function (num) {
    return num + 2;
};
console.log(addtwo(4));
var getUpper = function (val) {
    return val.toUpperCase();
};
console.log(getUpper('i m lower chnging to upper'));
//Returning the value in particuar datatype
var getHello = function (val) {
    //return 45;    if we uncomment the it will give error becuz we are passing return in string 
    //nd getting return in number it should always be String
    return ""; // this can be either empty string also no pr.
};
//If we are not sure about what type of data is to be  return after excution it is of VOID type and if
//if don't mention compiler will impliciely add that in the code .
var errorMsg = function (msg) {
    console.log(msg);
};
//in the above code if we dont pass void it will added auto. but we have to write it becuz of better understanding of code.
