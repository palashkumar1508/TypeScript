var akki = {
    name: 'akki',
    age: 45,
    speak: function (a) {
        return a;
    },
    spend: function (a) {
        return a;
    }
};
console.log(akki.speak("sdjhfvbjavh"));
console.log(akki.spend(4500));
var nay;
nay = {
    name: 'nayan',
    age: 45,
    speak: function (a) { },
    spend: function (b) {
        return b;
    }
};
nay.name = 'nayan';
nay.age = 45;
nay.speak('engllish');
nay.spend(44);
console.log(nay.name);
// let num:unknown
// num as number
// console.log("sdfsdsgs");
// let myVar: any =4 // myVar is of type "any"
// let myNum: number = myVar as number; // myVar is cast as a number
// console.log(typeof myNum); // "number"
// let myStr: string = <string>myVar; // myVar is cast as a string
// console.log(typeof myStr); // "string"
// console.log(myVar);
