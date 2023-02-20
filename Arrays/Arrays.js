var arrs = [45, 58, 'abc'];
console.log(arrs[2]);
var num = [45, 50, 550];
var x = num[0], y = num[1], c = num[2];
console.log(x);
console.log(y);
console.log(c);
var arr = [10, 2, 15, 6, 9, 8];
arr.forEach(function (value) {
    console.log(value * 10);
});
var i;
var myTupple;
myTupple = [2, "abc", false, 'Strngsss;'];
// myTupple.forEach((value)=>{
//     console.log(value);
// })
for (var _i = 0, myTupple_1 = myTupple; _i < myTupple_1.length; _i++) {
    i = myTupple_1[_i];
    console.log(i);
}
var tuple = [2, "tuples"];
var a = tuple[0], b = tuple[1];
console.log(a);
console.log(b);
var arrtuple = [[1, 'palash', true], [3, 'ankit', true]];
console.log(arrtuple[1][1]);
//Simple Tuple 
var simpleTuple = [43, "Vidya", false, ['inside_tuple', 47]];
console.log(typeof simpleTuple[3][1]);
// export{}
// If i am uncommenting the export it will not itterate the element of the tupple Or Array
