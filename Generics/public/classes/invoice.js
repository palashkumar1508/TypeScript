"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    displayClient() {
        console.log(this.details);
    }
}
exports.Invoice = Invoice;
