// union is basically adding two or more datatype in a variable by | 
//like we can add number and string in a same var that it will accept both number and string 
// we can add more than one datatypes in var
let id :number | string ;
id = 44;
id = "154";
id = 'One Five Four';
console.log(id);

//here we are adding more than one datatype in a var 
//here is the another example

let decision:string |boolean ;
decision ='true';
decision = true
console.log(decision);


// *********** Adding two datatype in Object so it is flexibe type **********
type User ={
    name :string,
    id :number | string,
    decision:boolean
}
type Flexi ={
    name :string,
    id :string,
    decision:string
}
let person:User |Flexi = {
    name : 'palash',
    id : '455',
    decision : "True"
}
console.log(person.name , person.id , person.decision);
//In the above code we have used more than two datatype in the person object 
// it is accepting the both User and Flexi type


// we can pass flexi union in function also
let disId = (id :string |number) =>{
    console.log(`id is ${id}`);    
}
disId(4);
disId('566');

//here below is the example of some validation
let fixId = (id : string | number)=>{
    if(typeof id === 'string'){
        return console.log(id.toUpperCase());
    }
    else{
        return console.log(id+4);
    }
}
// In the above program we are validating the type of entered value is either string or number and according to that returning val
fixId(45)
fixId("small")


//Using Union in Arrays
let arr:number [] = [45, 100]
let arr1 :string [] = ['abc' , ' xyz']
let arr22 : (string | number) [] = [45 , 'abc'] // IF WE WANT THE ARRAYS TO ACCEPT MOPRE THAN ONE DATA TYPE THEN WE HAVE TO ENCLOSE IT WITHIN (datatype | datatype)


//LITERAL ASSIGNMENT 
let salary :4500 = 4500;
// salary = 5000;  {We can not re-assign the value becuz it is having the value pre-assign val of 4500 - it will throw error}


