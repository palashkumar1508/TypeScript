"use strict";
let arr = [];
arr[0] = 'name';
arr[1] = 'hello';
arr[2] = '155';
let identityOne = (val) => {
    return val;
};
//Same code is written by below way
let identityTwo = (val) => {
    return val;
};
identityTwo(45);
let indentityThree = ({}); // we can create our own datatype and pass it
//GENERICS IN ARRAYS & OBJECTS & ARROW FUNCTION
let searchProductOne = (product) => {
    return product[0];
};
let searchProductTwo = (product) => {
    return product;
};
function production(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
production("1000", 44); // here T can be any type of datatype 
function game(name, play) {
    return 5;
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
let greet; // this will return any type of data
let calc;
calc = (num1, num2) => {
    return num1 + num2;
};
console.log(calc(4, 5));
let objName;
objName = (objs) => {
    console.log(`${objs.name}  ${objs.roll}`);
};
objName({ name: "ankit", roll: 45 });
// export{}
