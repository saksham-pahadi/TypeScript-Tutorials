"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = "1M";
subs = 12;
subs = true;
let apiResponse = "pending";
apiResponse = "success";
let airLineSeat = "aisle";
airLineSeat = "middle";
const orders = ['12', '34', '56'];
let currentOrder;
for (const order of orders) {
    if (order === "34") {
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}
console.log(currentOrder);
//# sourceMappingURL=UnionAndAny.js.map