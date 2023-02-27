interface A {
    [key:string] :Object
}

let name :A = {
    'Palash' : {name : 'hello', age :24}
}

console.log(name['Palash'].name);
