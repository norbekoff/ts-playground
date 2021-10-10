export class Invoice {
    constructor(client, detail, ammount) {
        this.client = client;
        this.detail = detail;
        this.ammount = ammount;
    }
    format() {
        return `${this.client} owes $${this.ammount} for ${this.detail}`;
    }
}
