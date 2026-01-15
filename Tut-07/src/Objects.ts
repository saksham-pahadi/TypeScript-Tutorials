// Using inline object types
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}


// {
//     name:string;
//     price:number;
//     isHot:boolean
// }


let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "green tea",
    price: 15,
    isHot: false
}

// Using Type Alias objects
type Coffee = {
    name: string;
    price: number;
    ingredients: string[];
    isHot: boolean
}

const hotCoffee: Coffee = {
    name: "Espresso",
    price: 30,
    ingredients: ["coffee beans", "water"],
    isHot: true
}

// duck typing
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "ceramic" };
smallCup = bigCup; // valid

type brew = { brewtime: number };
const coffee = { brewtime: 5, name: "Latte" };
const chaiBrew: brew = coffee; // valid


// Complex object types splitted into smaller types
type Item = { name: string; price: number };
type Address = { street: string; city: string; postalCode: string };

type order = {
    id: string;
    items: Item[];
    shippingAddress: Address
}


