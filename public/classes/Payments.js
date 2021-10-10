export class Payment {
    constructor(reciver, detail, ammount) {
        this.reciver = reciver;
        this.detail = detail;
        this.ammount = ammount;
    }
    format() {
        return `${this.reciver} is owed $${this.ammount} for ${this.detail}`;
    }
}
