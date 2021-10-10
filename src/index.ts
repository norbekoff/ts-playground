import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const invOne = new Invoice('Mario', 'Yoshi', 200)
let invoicees: Invoice[] = []
invoicees.push(invOne)

invoicees.forEach(inv => {
    console.log(inv)
})

let ul = document.querySelector('ul') as HTMLUListElement
let invTwo = new Invoice('Luigi', 'Mario', 300)
let list = new ListTemplate(ul)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLSelectElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]
    if (type.value === "invoice") {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, "end")

})



//generics 
const UID = <T extends { name: string }>(obj: T) => {
    let id = Math.floor(Math.random() * 100)
    return { ...obj, id }
}

const docOne = UID({ name: 'yoshi', age: 40 })
console.log(docOne.name)

interface Recourse<T> {
    name: string,
    age: number,
    data: T 
}


const docTwo: Recourse<object> = {
    name: 'yoshi', age: 40, data: { id: 10 }
}

