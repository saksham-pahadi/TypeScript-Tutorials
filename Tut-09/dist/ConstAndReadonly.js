const User = { id: 2, name: "Saksham" };
User.id = 5; // allowed
const NewUser = { id: 1, name: "Saksham" };
NewUser.name = "New Name"; // allowed
// NewUser.id = 5; // not allowed
console.log(NewUser);
const Otheruser = { id: 4, name: "Another User", age: 25 };
console.log(Otheruser);
export {};
//# sourceMappingURL=ConstAndReadonly.js.map