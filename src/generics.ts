let names: Array<string> = ['aaa','bbb'];
// this is an existing generic type


//this is a custom generic type
type DataStore<T> = { //T is a placeholder type which can be set later
    [key:string]:T
}
// dynamically setting the type value
let store : DataStore<string| number>= {};

store.username = 'sss'; // this is string value
store.age = 10; // this is a number value

let a : DataStore<string> = {}
a.a = 'aaa';
a.b = 'bbb';

// generic functions and interfaces

function merge<T>(a:T,b:T){
    return [a,b];
}

const ids = merge('a','b');

