function sum(a, b) {
    return a + b;
}
sum(10, 20); // ✅ 30
function filterByName(items, searchTerm) {
    return items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
const users = [
    { id: 1, name: "Saksham" },
    { id: 3, name: "Sakshi" },
    { id: 2, name: "Alex" }
];
const result = filterByName(users, "sak");
console.log(result); // [{ id: 1, name: "Saksham" }]
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
const person = { firstName: "Saksham", lastName: "Kushwaha" };
console.log(getFullName(person)); // "Saksham Kushwaha"
export { sum, filterByName, getFullName };
//# sourceMappingURL=typesafe.js.map