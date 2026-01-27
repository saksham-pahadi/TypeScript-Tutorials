function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);     // ✅ 30
// sum(10, "20");  // ❌ Type error


type HasName = {
  name: string;
};

function filterByName<T extends HasName>(
  items: T[],
  searchTerm: string
): T[] {
  return items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

const users = [
  { id: 1, name: "Saksham" },
  { id: 3, name: "Sakshi" },
  { id: 2, name: "Alex" }
];

const result = filterByName(users, "sak");
console.log(result); // [{ id: 1, name: "Saksham" },{ id: 3, name: "Sakshi" }]


interface Person {
  firstName: string;
  lastName: string;
}
function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}
const person: Person = { firstName: "Saksham", lastName: "Kushwaha" };
console.log(getFullName(person)); // "Saksham Kushwaha"

export {sum, filterByName, getFullName};