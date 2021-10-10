import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
const invOne = new Invoice('Mario', 'Yoshi', 200);
let invoicees = [];
invoicees.push(invOne);
invoicees.forEach(inv => {
    console.log(inv);
});
let ul = document.querySelector('ul');
let invTwo = new Invoice('Luigi', 'Mario', 300);
let list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//generics 
const UID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const docOne = UID({ name: 'yoshi', age: 40 });
console.log(docOne.name);
const docTwo = {
    name: 'yoshi', age: 40, data: { id: 10 }
};
