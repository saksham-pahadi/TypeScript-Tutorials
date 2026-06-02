"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const masalaChai = {
    flavor: "spicy",
    price: 10
};
const calculateDiscount = (price, discount) => {
    return price - (price * discount) / 100;
};
class BasicTeaMachine {
    start() {
        console.log("Tea machine started");
    }
    stop() {
        console.log("Tea machine stopped");
    }
}
const teaMachine = new BasicTeaMachine();
teaMachine.start();
teaMachine.stop();
const chaiRatings = {
    spicy: 5,
    sweet: 4,
    bitter: 3
};
console.log(chaiRatings);
//# sourceMappingURL=interface.js.map