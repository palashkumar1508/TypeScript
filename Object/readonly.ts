type User = {
    readonly id :number,
    name :string,
    email:string,
    isActive :boolean,
    cred ?:string       //this is an optional key val. (?) 
}

let myUser:User = {
    id : 1234,
    name :'pal',
    email :'pala.com',
    isActive :false,
}
// myUser.id = 5000    (We can nnot chnage the value of id becuz it is readonly) we only read the value
console.log(myUser.id);

// Concatinating Two or more types
type Firstname = {
    firstname :string 
}
type Lastname ={
    lastname :string
}
type Fullname = Firstname & Lastname //Concatinating two types
let fulname :Fullname = {
    firstname :"Palash",
    lastname:'kumar'
}

console.log(fulname.firstname , fulname.lastname);
