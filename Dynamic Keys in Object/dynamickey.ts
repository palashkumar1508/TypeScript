interface A {
    [key:string] :boolean | Object[];
    // [key:string] : object
}

let names :A = {
    "Palash" : false,
    "Store" :true,
    "Start" :false,
    "Obj" : [{abc :'hello' , cd :'hiiiii'} , {ghi :'hello' , fff :'hiiiii'}]
}

console.log(names["Obj"][1].fff);

// type Any = string | number | Object | Object[] 

function acceptAnyData <T> (abc :T):T{
     return abc
}