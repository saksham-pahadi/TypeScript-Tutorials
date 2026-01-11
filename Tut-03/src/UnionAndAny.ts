let subs: number | string | boolean = "1M"
subs = 12
subs = true


let apiResponse: "pending" | "success" | "error" = "pending"
apiResponse = "success"
let airLineSeat: "aisle" | "middle" | "window" = "aisle"
airLineSeat = "middle" 


const orders = ['12', '34', '56'] 
let currentOrder:string | undefined;
for (const order of orders) {
    if (order === "34"){
        currentOrder = order
        break;
    }
    currentOrder = '11';
}   
console.log(currentOrder);