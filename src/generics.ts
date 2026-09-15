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
const ids2 = merge(1,2);

function test<T, U>(a:T, b:U){
    return [a,b];
}

const x = test(1,'s');

function mergeObj <T extends object>(a:T, b:T){
    return {...a,...b};
}

const merged = mergeObj({name:'aaa'}, {age:22});

console.log(merged);

function mergeObj2 <T extends object, U extends object>(a:T, b:U){
    return {...a,...b};
}

const merged2 = mergeObj2({name:'aaa'}, {age:22});

console.log(merged2);

// generic classes and interfaces

class User<T>{
    constructor(public id: T){}

}

const user = new User('id1');

user.id = 'id2';

interface Role<T>{
    name:T;
}
