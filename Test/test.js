function isString(value) {
    return typeof value === "string";
}
//   isString("hi")
function printStringOrLength(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toString());
    }
}
printStringOrLength(true);
function isDog(pet) {
    return pet.hasOwnProperty('breed');
}
function printPet(pet) {
    if (isDog(pet)) {
        console.log("This is a dog named " + pet.name + ", of breed " + pet.breed);
    }
    else {
        console.log("This is a cat named " + pet.name + ", aged " + pet.age + " years old");
    }
}
var myDog = { name: "Rex", breed: "Labrador" };
var myCat = { name: "Whiskers", age: 3 };
printPet(myDog);
var A;
(function (A) {
    A[A["red"] = 1] = "red";
    A[A["blue"] = 2] = "blue";
})(A || (A = {}));
console.log(A['red']);
