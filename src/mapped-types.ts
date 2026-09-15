// mapped types
//
// Operations is a type with two funtion type properties
type Operations = {
    add : (a:number, b:number) => number;
    substract : (a:number, b:number) => number;
}

// creating a const of type Operations and defining the functions
const mathOperations: Operations = {
    add(a:number, b:number){
        return a+b;
    },
    substract(a:number, b:number){
        return a-b;
    }
}

// type Results = {
//     add:number,
//     substract:number,
// }

// const results: Results = {
//     add:mathOperations.add(1,2),
//     substract:mathOperations.substract(5,3),
// }
// this is ok for simple objects but hard for complex objects 
// as the operations and results objects are same.

// now using mapped types

type Results<T> = {
    [K in keyof Operations]:number;
}

const results: Results<Operations> = {
    add: mathOperations.add(1,2),
    substract: mathOperations.substract(5,3),
}


/// Optional mappings

type OptionalResults<T>= {
    [Key in keyof Operations]?:number
} // notice the question mark

const results2: OptionalResults<Operations> = {
    add: mathOperations.add(2,3),
} // notice it is not complaining about missing substract

// You can also switch the optional to required by 
// using -?

type requiredResults<T>= {
    [Key in keyof Operations]-?:number
    //readonly [Key in keyof Operations]:number
    // -readonly [Key in keyof Operations]:number
} // notice the minus question mark, this makes the optional
// options properties in actual object to required

// can also set properties to readonly or remove readonly 
// from the original type


