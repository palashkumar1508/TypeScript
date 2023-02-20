// union is basically adding two or more datatype in a variable by | 
//like we can add number and string in a same var that it will accept both number and string 
// we can add more than one datatypes in var
var id;
id = 44;
id = "154";
id = 'One Five Four';
console.log(id);
//here we are adding more than one datatype in a var 
//here is the another example
var decision;
decision = 'true';
decision = true;
console.log(decision);
var person = {
    name: 'palash',
    id: '455',
    decision: "True"
};
console.log(person.name, person.id, person.decision);
//In the above code we have used more than two datatype in the person object 
// it is accepting the both User and Flexi type
// we can pass flexi union in function also
var disId = function (id) {
    console.log("id is " + id);
};
disId(4);
disId('566');
//here below is the example of some validation
var fixId = function (id) {
    if (typeof id === 'string') {
        return console.log(id.toUpperCase());
    }
    else {
        return console.log(id + 4);
    }
};
// In the above program we are validating the type of entered value is either string or number and according to that returning val
fixId(45);
fixId("small");
