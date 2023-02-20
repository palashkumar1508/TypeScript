//we have to declare the key with datatypes and if anything is optinal then we have to use ? before the :
interface User  {names:string , roll:number , pass :boolean , school? :string}
let user:User = {
    pass :true,
    roll : 45,
    names : "dfgdf"
}

let display = (user:User)=>{
    console.log(user.names);
    console.log(user.roll);
    console.log(user.pass);
    
}

display(user);

// export{}