//opps.ts
class Chai {
  flavor: string;
  price: number;

  constructor(flavor: string, price: number) {
    this.flavor = flavor;
    this.price = price;
  }
}

const masalachai = new Chai("Ginger", 30);
masalachai.flavor = "masala";
console.log(masalachai);
//encapsulation
class Coffee {
  public flavor: string;
  private secretIngredient: string;
  

  constructor(flavor: string) {
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
    protected shopname="Coffee House";
}

class branch extends shop {
    getShopName(): string {
        return this.shopname;
    }
}

abstract class Drink {
    abstract make(): void;
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
    heat(){}
}

class chaimaker{
    constructor(private heater: Heater) {
        
    }
    makeChai() {
        this.heater.heat();
        console.log("Chai is ready");
    }
}


