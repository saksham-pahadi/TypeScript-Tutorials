const User = {id:2, name:"Saksham"};
User.id = 5; // allowed
// User = {id:3, name:"New Name"}; // not allowed

interface User {
    readonly id: number;
    name: string;
    age?: number; // optional property
}
const NewUser: User = {id:1, name:"Saksham"};
NewUser.name = "New Name"; // allowed
// NewUser.id = 5; // not allowed
console.log(NewUser);

const Otheruser: User = {id:4, name:"Another User", age:25};
console.log(Otheruser);