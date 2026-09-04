function add(a: number, b: number): number {
    return a + b;
}

function add1(a: number, b: number = 0): number {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
console.assert(add(5, 10) === 15, "add function failed");
console.assert(add1(5, 10) === 15, "add1 function failed");
console.assert(add1(5) === 5, "add1 function failed");

function message(name: string): string {
    return `Hello, ${name}!`;
}

console.log(message("John")); // Output: Hello, John!
console.assert(message("John") === "Hello, John!", "message function failed");

function logAndThrowError(message: string): never { // never return type indicates that this function will never return a value
    console.error(message);
    throw new Error(message);
}

//logAndThrowError("This is an error message"); // This will log the error and throw an exception

//functon as a value
const multiply = function (a: number, b: number): number {
    return a * b;
};

console.log(multiply(5, 10)); // Output: 50
console.assert(multiply(5, 10) === 50, "multiply function failed"); 

function performJob(cb: (m: string)=> void) {
    cb("Job completed");
}

function printMessage(message: string) {
    console.log('8888');
    console.log('9999');
    console.log(message);
}


performJob(printMessage); // Output: Job completed
/*
performJob(printMessage)
        ↓
cb points to printMessage
        ↓
cb("Job completed")
        ↓
printMessage("Job completed")
        ↓
Console: Job completed */

type User = {
    name: string;
    age: number;
    greet: ()=> string;
}

let user: User = {
    name: "Alice",
    age: 30,
    greet: () => {
        console.log('greet function called');
        return `Hello, my name is ${user.name} and I am ${user.age} years old....`;
    }
};

console.log(user.greet()); // Output: Hello, my name is Alice and I am 30 years old.

let a : null;
let b : null | string;
a = null;
b = null;
b = "Hello, World!"; // Valid assignment

console.log(a); // Output: null
console.log(b); // Output: Hello, World!

// undefined type means that a variable can be either undefined or
// a specific type. It is often used to indicate that a variable may not 
// have been assigned a value yet.
let c: undefined;
let d: string | undefined;
c = undefined;
d = undefined;
d = "Hello, TypeScript!"; // Valid assignment
// undefined = a value has not been assigned yet.
// null = a value was intentionally set to "no value".
// strict equality console.log(undefined === null); --> false
// loose equality console.log(undefined == null); --> true

let x: {name: string} | null = null;

console.log('is null: ' + (x === null)); // Output: is null: true

    console.log(typeof x); // Output: name: undefined


x = {name: "John Doe"};
console.log(typeof x)
console.log(x.name); // Output: John Doe

// unknown 
let y: unknown;
y = "Hello, TypeScript!";
y = 42;
console.log(y); // Output: 42

function process(val: unknown){
    if(!!val && typeof val === "object" && "log" in val && typeof val.log === "function"){
       val.log();
    }
}