import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter  { 
    constructor(
        readonly reciver: string,
        private detail: string,
        public ammount: number
    ) {
    }
     format() {
     return `${this.reciver} is owed $${this.ammount} for ${this.detail}`
    }
}