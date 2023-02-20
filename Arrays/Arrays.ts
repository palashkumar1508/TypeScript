let arrs =[45,58,'abc' ];
console.log(arrs[2]);






let num :number [] = [45,50,550];
let [x,y,c] = num;

console.log(x);
console.log(y);
console.log(c);

let arr :number [] = [10,2,15,6,9,8];
arr.forEach((value)=>{
    console.log(value * 10);
    
}) 
let i:any;
let myTupple :[number , string , boolean , string];
myTupple = [2,"abc", false, 'Strngsss;']

// myTupple.forEach((value)=>{
//     console.log(value);
    
// })
for(i of myTupple){
    console.log(i);
    
}


let tuple :[number, string] = [2, "tuples"];
let [a,b] = tuple;
console.log(a);
console.log(b);

let arrtuple : [number, string , boolean] [] = [ [1,'palash', true] , [3 , 'ankit' , true] ];
console.log(arrtuple[1][1]);

//Simple Tuple 
let simpleTuple = [43, "Vidya" , false , ['inside_tuple' , 47]];
console.log(typeof simpleTuple[3][1]);






// export{}
// If i am uncommenting the export it will not itterate the element of the tupple Or Array

