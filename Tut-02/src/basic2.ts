let drink = "coffee";
// drink = 2543 //Type 'number' is not assignable to type 'string'.
let cups = Math.random() > 0.5 ? 2 : "3";

let orders: (string | number)[] = [];
orders.push(drink);
orders.push(9);
console.log(orders);
