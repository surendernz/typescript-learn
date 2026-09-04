const message: string = "TypeScript is ready to learn....";

console.log(message);

let user = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ["Reading", "Traveling", "Gaming"],
};

let phone: {
    number: string;
    model: string;
    isActive?: boolean; // Optional property
   
} = {
    number: "123-456-7890",
    model: "iPhone 12",
    isActive: true
};

console.log(`User Name: ${user.name}`);
console.log(`User Age: ${user.age}`);
console.log(`Is User a Student? ${user.isStudent}`);
console.log(`Phone Number: ${phone.number}`);
console.log(`Phone Model: ${phone.model}`);
console.log(`Is Phone Active? ${phone.isActive}`);

let val:{} = 'text'; // {} means any non-nullish value, so it can be a string, number, object, etc. In this case, 'text' is a string.
//val = null; // This will cause a TypeScript error because null is not assignable to type '{}'.
console.log(val + typeof val);

let data: Record<string, number| string> = {
    "item1": 10,
    "item2": 20,
    "item3": 30,
    "item4": "forty",
};

console.log(data);


//enums: 
enum UserRole {
    Admin, //0
    User, //1
    Guest, //2
}

let userRole: UserRole = 0;
userRole = UserRole.User; // Assigning a valid enum value
console.log(`User Role: ${userRole}`);

enum WeekDays {
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI",
    Saturday = "SAT",
    Sunday = "SUN",
}

let today: WeekDays = WeekDays.Monday;
console.log(`Today is: ${today}`);

let userRoles: 'admin' | 'user' | 'guest'; // Union type for user roles
userRoles = 'admin'; // Valid assignment
// userRoles = 'superadmin'; // This will cause a TypeScript error because 'superadmin' is not part of the union type.

console.log(`User Role: ${userRoles}`);

