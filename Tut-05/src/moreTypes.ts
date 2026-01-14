let response:any ="42";
let numericLength:number = (response as string).length;
console.log(`The length of the response is ${numericLength}.`);

type Book = {
    name: string;
}

let BookString = '{"name": "The Great Gatsby"}';
let bookObj = JSON.parse(BookString) as Book;
console.log(`Book name is ${bookObj.name}.`);


const inputElement = document.getElementById("user-input") as HTMLInputElement;
inputElement.value = "Hello, TypeScript!";
console.log(`Input value is: ${inputElement.value}`);


let value :any;
value = "A simple string";
value = [1,2,3];
value = 2.5;
value.toUperCase(); // This will cause a runtime error if value is not a string

let NewValue :unknown;
NewValue = "A simple string";
NewValue = [1,2,3];
NewValue = 2.5;
// value.toUperCase(); // This will cause a compile-time error

if (typeof NewValue === "string") {
    NewValue.toUpperCase(); // Safe to use as string
}
