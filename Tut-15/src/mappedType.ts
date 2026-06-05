type ReadonlyUser<T> = {
  readonly [K in keyof T]: T[K];
};

type User = {
  name: string;
  age: number;
};

type UserInfo = User;

const user: UserInfo = {
  name: "Alice",
  age: 30,
};

user.name = "Bob"; // This is allowed

const readonlyUser: ReadonlyUser<User> = {
  name: "Charlie",
  age: 25,
};

// readonlyUser.name = "Dave"; // Error: Cannot assign to 'name' because it is a read-only property

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = Optional<User>;

const optionalUser: OptionalUser = {
  name: "Eve",
};
optionalUser.age = 28; // This is allowed, age is optional

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;
const nullableUser: NullableUser = {
  name: "Frank",
  age: null,
};
nullableUser.age = 35; // This is allowed, age can be number or null
type RequiredFields<T> = {
  [K in keyof T]-?: T[K];
};
type RequiredUser = RequiredFields<OptionalUser>;
const requiredUser: RequiredUser = {
  name: "Grace",
  age: 22,
}; // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'RequiredUser'.




// Key remapping example

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]:
    () => T[K];
};
type UserGetters = Getters<User>;
const userGetters: UserGetters = {
  getName: () => "Heidi",
  getAge: () => 27,
};

console.log(userGetters.getName()); // Output: Heidi
console.log(userGetters.getAge()); // Output: 27



// Filtering Keys example
type RemoveAge<T> = {
  [K in keyof T as Exclude<K, "age">]: T[K];
};
type UserWithoutAge = RemoveAge<User>;
const userWithoutAge: UserWithoutAge = {
  name: "Ivan",
//   age: 30,
}; // This is allowed, age is removed from the type