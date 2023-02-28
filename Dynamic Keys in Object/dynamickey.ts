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



// interface  Language {
//     "Hindi" :string;
//     "English" :string ;
//     "German"  :string
// }

// let word : Partial <Language> = {
//     "Hindi" : "Hindi lng"
// }

// let word2 : Partial <Language> = {
//     "English" : "Hindi lng"
// }

// let word3 : Language = {
//     "English" : "Hindi lng",
//     "Hindi" : "hindi" ,
//     "German" :"germany",
    
// }

// console.log(word["Hindi"]);

interface Lang {
    "Hindi" : string;
    "English" :string;
    "German" : string;
}

let indLang :Partial<Lang> = {
    "Hindi" : "India",
}

type Lan = "Hindi" | "English" | "German" 

type Language ={
    [key in Lan] : string
}

let abcd : Partial<Language> = {
    "English" : "Us",
}