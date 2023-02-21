class User {
    name : string
    email :string
    readonly city: string = 'Jaipur' 
    constructor(email:string , name :string){
        this.email = email;
        this.name =name;
    }
} 
let Ankit = new User('ankit.com', 'Ankit')
console.log(Ankit.name); // Ankit
// Ankit.city = " Delhi" This will give an error becuz we are chnging the readonly value

console.log(Ankit.city);

// we can wrte the above code in this way also
class Car{
    constructor(public brand: string , public model:string , yearOfPurchase :number){

    }
}

let Amaze = new Car('HONDA' , 'Amaze' , 2023)
console.log(Amaze.brand);
console.log(Amaze.model);
// console.log(Amaze.yearOfPurchase);  We can not access yearofpurchase becuz it is not public if we want to access we have to make it public or we have to pass it in  class and make it like this.property


//GETTER SETTER

class Login{

    private pass = 12345
    constructor(public name:string , public email:string){

    }
    get getPass():number{
        return this.pass
    }
    set setPass(val){
        this.pass = val
    }
}

let ankit = new Login('Ankit', 'akki.conmm')
console.log(ankit.name);
ankit.setPass = 49
console.log(ankit.getPass);


function doSomething(x: string | null) {
    if (x === null) {
     
      
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
  doSomething('Shubham')
//   doSomething();

 class Instagram{
    constructor(
        public name :string,
        public username :string,
    ){}
     upload() :void {

     }
}

abstract class Facebook{
    constructor(
        public userid:string,
        public pass:number
    ){}
}

class Fb extends Facebook{}

let userInsta = new Instagram('palash' , 'palash1508')
// let userFb = new Facebook('pk1508', 1999999)  we can not create object from the abstract class.
let userFb = new Fb('pal', 4555)