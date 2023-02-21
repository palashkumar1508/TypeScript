export class Invoice {
    client:string;
    details:string;
    amount:number;
    constructor(client:string , details:string,amount:number){
        this.client = client;
        this.details = details;
        this.amount = amount
    }
    displayClient(){
        console.log(this.details);
        
    }
}

