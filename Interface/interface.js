//here below is the function created which is gonna be passing inside the function next in the declaration.
var x = function () {
    return 'palash is working';
};
var palash = {
    name: ' palash',
    id: 123,
    decision: true,
    sal: 4500,
    work: x,
    "do": function () {
        return "it will only return string";
    },
    anothermethod: function () {
        return 155; // it will only return number 
    },
    getCoupon: function (val) {
        return 45666;
    }
};
var day = {
    name: ' jhbdfs',
    id: 45,
    email: 'bjb',
    numb: 545545555,
    sun: 7899
};
console.log(day.numb);
palash.id = 455555;
console.log(palash.id);
console.log(palash.work());
