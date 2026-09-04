type user = {   
    name: string;
    age: number;
    role?: string;
}

function printError(msg?:string){
    throw new Error(msg);
}

// nullish coalescing operator
function getUserRole(user: user): string {
    return user.role ?? "Guest"; // If user.role is null or undefined, return "Guest"
}

let user1: user = { name: "Alice", age: 25 };
console.log(getUserRole(user1)); // Output: Guest

let user2: user = { name: "Bob", age: 30, role: "Admin" };
console.log(getUserRole(user2)); // Output: Admin   