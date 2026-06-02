function wrapInArray<T>(item:T):T[]{
    return [item];
}

wrapInArray(5); // [5]
wrapInArray("Hello"); // ["Hello"]
wrapInArray({name: "Alice", age: 30}); // [{name: "Alice", age: 30}]

function pair<A,B>(first: A, second: B): [A, B]{
    return [first, second];
}

pair("masala",44)
pair("Saksham",{age: 30, profession: "Developer"})

interface Box<T>{   
    content:T
}
const numberBox:Box<number>={
content:42
}

interface ApiPromise<T>{
    status: "success" | "error"
    data: T
}

const res:ApiPromise<{name: string, age: number}> = {
    status: "success",
    data: {
        name: "Alice",
        age: 30
    }
}