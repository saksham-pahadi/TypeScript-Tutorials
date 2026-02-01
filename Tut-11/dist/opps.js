"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//opps.ts
class Chai {
    flavor;
    price;
    constructor(flavor, price) {
        this.flavor = flavor;
        this.price = price;
    }
}
const masalachai = new Chai("Ginger", 30);
masalachai.flavor = "masala";
console.log(masalachai);
//encapsulation
class Coffee {
    flavor;
    secretIngredient;
    constructor(flavor) {
        this.flavor = flavor;
        this.secretIngredient = "caramel";
    }
    revealSecret() {
        return this.secretIngredient;
    }
}
const cappuccino = new Coffee("Hazelnut");
cappuccino.flavor = "vanilla";
console.log(cappuccino.flavor);
console.log(cappuccino.revealSecret());
//inheritance
class shop {
    shopname = "Coffee House";
}
class branch extends shop {
    getShopName() {
        return this.shopname;
    }
}
class Drink {
}
class Latte extends Drink {
    make() {
        console.log("Making a latte");
    }
}
const myLatte = new Latte();
myLatte.make();
//composition
class Heater {
    heat() { }
}
class chaimaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    makeChai() {
        this.heater.heat();
        console.log("Chai is ready");
    }
}
//# sourceMappingURL=opps.js.map