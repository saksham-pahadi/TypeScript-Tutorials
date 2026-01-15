// Interface representing 
type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order:ChaiOrder){
    console.log("Making chai with the following order:",order);
}

function serveChai(order:ChaiOrder){
    console.log("Serving chai with the following order:",order);
}


type CoffeeOrder = {
    type: string;
    milk: boolean;
    sugar: number;
};

class CoffeeShop implements CoffeeOrder {
    type = "Latte";
    milk = true;
    sugar = 2;
}



interface  CupSize {
    size: "small" | "medium" | "large";
}

class Chai implements CupSize{
    size: "small" | "medium" | "large"="medium";
}

// type Response = {ok: true}| {ok: false};

// class ApiService implements Response {
//     ok:boolean=true;
// }


