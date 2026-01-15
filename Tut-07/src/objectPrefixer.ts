// Using Partial to make all properties of chai optional
type chai = {
    name:string,
    price:number,
    isHot:boolean
}

const updateChai = (updates:Partial<chai>)=>{
    console.log("updating chai with ", updates);
}

updateChai({price:150});
updateChai({isHot:false});
updateChai({});


// Using Required to make all properties of chai mandatory
type chaiOptional = {
    name?:string,
    price?:number,
    isHot?:boolean
}
const makeChaiRequired = (chaiDetails:Required<chaiOptional>)=>{
    console.log("chai details: ", chaiDetails);
}
makeChaiRequired({name:"Masala Chai", price:120, isHot:true});
// Using Readonly to make all properties of chai immutable
type coffee = {
    name:string,
    price:number,
    isHot:boolean
}
const myCoffee:Readonly<coffee> = {
    name:"Espresso",
    price:200,
    isHot:true
}
// myCoffee.price = 250; // Error: Cannot assign to 'price' because it is a read-only property

console.log("My coffee: ", myCoffee);

// Using Pick to create a new type with selected properties from chai
type Chai = {
    name:string,
    price:number,
    isHot:boolean
}
type chaiDetails = Pick<Chai, "name" | "price">;    
const getChaiDetails = (details:chaiDetails)=>{
    console.log("Chai Details: ", details);
}   
getChaiDetails({name:"Ginger Chai", price:130});

// Using Omit to create a new type by excluding specific properties from chai
type ChaiFull = {
    name:string,
    price:number,
    isHot:boolean
}
type chaiWithoutIsHot = Omit<ChaiFull, "isHot">;
const getChaiWithoutIsHot = (details:chaiWithoutIsHot)=>{
    console.log("Chai without isHot: ", details);
}
getChaiWithoutIsHot({name:"Lemon Chai", price:110});

