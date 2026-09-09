
console.log("Hello, TypeScript!!!!!!...");

// let and var are slightly different in terms of scope and hoisting.
// let is block-scoped, while var is function-scoped. 
// This means that variables declared with let are only accessible within the block they are defined in, 
// while variables declared with var are accessible throughout the entire function they are defined in.
    var result;
// function add(a:number, b:number): number {

//     result = a+b;
//     return result;
// }

function age(age:number): string {
    if(age < 0) {
        throw new Error("Age cannot be negative");
    }
    
    return `My age is ${age}`;
}

function demonstrateVarAndLet(): void {
    if (true) {
        var functionScoped = "var is function-scoped";
        let blockScoped = "let is block-scoped";

        console.log(functionScoped);
        console.log(blockScoped);
    }

    console.log(functionScoped);

    // This would cause a compile error because blockScoped only exists in the if block:
    // console.log(blockScoped);
}

demonstrateVarAndLet();

// for (var varIndex = 0; varIndex < 3; varIndex++) {
//     setTimeout(() => console.log("var index:", varIndex), 0);
// }

// for (let letIndex = 0; letIndex < 3; letIndex++) {
//     setTimeout(() => console.log("let index:", letIndex), 0);
// }
// console.log(add(5, 10));
// console.log(result);


const addNum = (a: number, b: number): number => a + b;
const addNum2 = (a: number, b: number): number => {
    return a + b;
};
const addNum3 = (a: number, b: number = 1) => a + b; // note that default value has to be set for the last parameter, otherwise it will throw an error


console.log(addNum(3, 4));
console.log(addNum2(3, 4));
console.log(addNum3(3, 4));

const printOutput = (value: string | number) => console.log(`printable data is ${value}`);
const printOutput2: (value: string | number) => void = value => console.log(`printable data is ${value}`);
const printOutput3: (value: string | number) => void = (value) => console.log(`printable data is ${value}`);

printOutput(addNum(5, 6));
printOutput2(addNum2(5, 6));
printOutput3(addNum3(5, 6));

printOutput(addNum3(5)  ); // default value of b is used, which is 1, so the result is 5 + 1 = 6

const hobbies: string[] = ["Sports", "Cooking"];
console.log(hobbies);
const activeHobbies: Array<string> = ["Hiking", "Reading"];
activeHobbies.push("Swimming");
console.log(activeHobbies);
activeHobbies.push(hobbies[0]!); // Adding the first hobby from hobbies array to activeHobbies
console.log(activeHobbies);

//activeHobbies.push(hobbies); // This will cause a compile error because hobbies is an array of strings, and activeHobbies is an array of strings.
//  You cannot push an array into another array of strings.
console.log('-----------------');
console.log(activeHobbies);
activeHobbies.push(...hobbies); // This will spread the hobbies array and 
// push each element into activeHobbies
console.log('Active Hobbies:', activeHobbies);

const person: {
    name: string;
    age: number;
} = {
    name: "Max",
    age: 30
};

console.log(person);

const copyPerson = person; // This will create a reference to the original person object, not a copy
copyPerson.age = 31; // This will change the age of the original person object as well
console.log(person); // { name: "Max", age: 31 }
console.log(copyPerson); // { name: "Max", age: 31 }

const copiedPerson = { ...person }; // This will create a shallow copy of the person object
copiedPerson.age = 32; // This will not change the age of the original person object
console.log(person); // { name: "Max", age: 31 }
console.log(copiedPerson); // { name: "Max", age: 32 }

//=====
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => { 
        //reduce is a method that takes a callback function and an initial value, 
        //and applies the callback function to each element of the array, accumulating the result.
        return curResult + curValue;
    }, 0);
};
