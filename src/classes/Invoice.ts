import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter  { 
    constructor(
        readonly client: string,
        private detail: string,
        public ammount: number
    ) {
    }
     format() {
     return `${this.client} owes $${this.ammount} for ${this.detail}`
    }
}