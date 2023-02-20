interface Userss {
    name :string ,
    id :number,
    decision :boolean,
    sal :number,
    work : () =>{},
    do : () => string
    anothermethod() : number,
    getCoupon(id :string) :number // here in this method it will accept id  string as parameter and return the number

}

//here below is the function created which is gonna be passing inside the function next in the declaration.

let x = () => {
    return 'palash is working'
}
let palash :Userss = {
    name :' palash',
    id :123,
    decision : true ,
    sal :4500,
    work : x,
    do :  () => {
        return "it will only return string"
    } ,
    anothermethod : () =>{
        return 155 // it will only return number 
    },
    getCoupon: (val :'abc') => {
            return 45666
    }
}

interface Abc  {
    name :string,
    id :number
}
interface Abc {
    email:string
}
interface Cde {
    numb :number
}

interface xyz extends Abc , Cde{
    sun :number
}
let day = {
    name : ' jhbdfs',
    id:45,
    email :'bjb',
    numb :545545555,
    sun:7899
}

console.log(day.numb);

palash.id = 455555;
console.log(palash.id);
 console.log(palash.work());
  
