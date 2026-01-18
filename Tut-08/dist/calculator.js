// Calculator function
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return a / b;
        default:
            // This will never happen because of the Operation type
            throw new Error("Invalid operation");
    }
}
console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "subtract")); // 5
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
export {};
// console.log(calculate(10, 0, "divide"));    // Error: Division by zero is not allowed
//# sourceMappingURL=calculator.js.map