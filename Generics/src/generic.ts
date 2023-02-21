let arr :string [] = []
arr[0] = 'name'
arr[1] = 'hello'
arr[2] = '155'

let identityOne = <Type>(val:Type):Type => {
    return val
}
//Same code is written by below way

let identityTwo = <D>(val:D):D =>{
    return val
}

identityTwo(45)

interface Gym {
    name : string,
    brand :string
}

let indentityThree = <Gym>({}) // we can create our own datatype and pass it

//GENERICS IN ARRAYS & OBJECTS & ARROW FUNCTION

let searchProductOne = <T,> (product : T[]):T =>{
    return product[0]
}

let searchProductTwo = <T,> (product : T[]):T[] =>{
    return product
}

function production <T , U extends number>(valOne :T , valTwo :U):object{
    return {
        valOne,
        valTwo
    }
}

production("1000", 44) // here T can be any type of datatype 

function game <T, U extends Gym> (name :T , play :U):number {
    return 5
}

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable <T,>{
    public cart :T[] = []
    
    addToCart(products :T){
        this.cart.push(products)
    }
}

let greet :(a:string, b:string)=>void // this will return any type of data

let calc :(a:number, b:number , c?:string)=> number

calc =(num1 , num2)=>{
    return num1+num2
}
console.log(calc(4,5));

let objName :(obj:{name:string , roll:number})=> void

objName = (objs:{name:string , roll:number})=>{
    console.log(`${objs.name}  ${objs.roll}`);
}
objName({name :"ankit", roll: 45})


// export{}