// Union Type
type Teatype = "masala" | "ginger" | "cardamom";

function orderhai(t:Teatype) {
    console.log("Ordering a cup of", t, "chai");
    
}


// Intersection Type
type BaseChai = {tealeaves:number}
type Extra = {masala:number}
type MasalaChai = BaseChai & Extra;

const myChai:MasalaChai={
    tealeaves:5,
    masala:3
}

// Optional Properties
type user = {
    name:string;
    bio?:string;
}

const user1:user={
    name:"Alice"
}
const user2:user={
    name:"Bob",
    bio:"Loves chai"
}

// Readonly Properties
type ImmutableChaiOrder = {
    readonly type:string;
    readonly sugar:number;
    readonly milk:boolean;
}
const order:ImmutableChaiOrder={
    type:"ginger",
    sugar:2,
    milk:true
}
// order.sugar=3; // Error: Cannot assign to 'sugar' because it is a read-only property.