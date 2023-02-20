type Detail = {
    name :string,
    roll :number,
    school:string
}

let detail:Detail = {
    name : 'xyz',
    roll :45,
    school: 'sbc'
}

let print = (val:Detail)=>{
    console.log(val.name);
    console.log(val.roll);
    console.log(val.school);
}

print(detail)


type Employee = {name :string , id :number , sal : number}

let show = (val:Employee) =>{
    console.log(val.id);
    console.log(val.name);
    console.log(val.sal);    
}

let sunil:Employee = {
    name :"Sunil",
    id :1001,
    sal :15000
}

show(sunil)

type Fullname = {
    firstName :string,
    lastName :string
}

let disFull = (val :Fullname)=>{
    console.log(val.firstName , val.lastName);
}

disFull({firstName: "palash" , lastName:"kumar"})

