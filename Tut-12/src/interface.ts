interface chai{
    flavor: string
    price: number
    milk?: boolean
}

const masalaChai : chai = {
    flavor: "spicy",
    price: 10
}

interface DiscountCalculator{
    (price: number, discount: number): number
}

const calculateDiscount: DiscountCalculator = (price, discount) => {
    return price - (price * discount) / 100
}


interface TeaMachine{
    start(): void
    stop(): void
}

class BasicTeaMachine implements TeaMachine{
    start(): void {
        console.log("Tea machine started")
    }
    stop(): void {
        console.log("Tea machine stopped")
    }
}

const teaMachine = new BasicTeaMachine()
teaMachine.start()
teaMachine.stop()

interface ChaiRating{
    [flavor: string]: number
}

const chaiRatings: ChaiRating = {
    spicy: 5,
    sweet: 4,
    bitter: 3
}
console.log(chaiRatings)


interface User{
    name: string
}
interface User{
    age: number
}

const u : User = {
    name: "Alice",
    age: 30
}

interface A{a: number}
interface B{b: string}
interface C extends A, B{
    c: boolean
}