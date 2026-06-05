type GetArrayItem<T> =
  T extends Array<infer U>
    ? U
    : never;
type TypeA = GetArrayItem<string[]>; // string
type TypeB = GetArrayItem<number>; // never
const item: TypeA = "Hello"; // This is valid



type GetReturnType<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;

function getUser() {
  return {
    name: "Saksham",
  };
}
type User = GetReturnType<typeof getUser>; // { name: string }
const user: User = {
  name: "Saksham",
}; // This is valid

type GetFirstParam<T> =
  T extends (arg: infer P) => any
    ? P
    : never;
function greet(name: string) {
  return `Hello, ${name}!`;
}
type FirstParam = GetFirstParam<typeof greet>; // string
const param: FirstParam = "World"; // This is valid
