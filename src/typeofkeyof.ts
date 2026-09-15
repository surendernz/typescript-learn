const name:string = 'surender';

console.log(typeof name);

type UserName = {
    firstName: string;
    lastName: string;
}

const n: UserName = {
    firstName: 'surender',
    lastName: 'adavalli'
}

console.log(typeof n);

const settings = {
    difficulty: 'high',
    minLevel: 10,
    didStart: false,
    players: ['John','Jane']
}

type Settings = typeof settings;

function load(settings: Settings){
 //...
}

function load2(s: typeof settings){
 //...
}
load(settings);

type User = {name: string, age:number};

type UserKeys = keyof User;

let validKey: UserKeys;
validKey = 'name';
validKey = 'age';

function getProp<T extends object, U extends keyof T>(obj:T, key: U){
    const val = obj[key];
    if(val === undefined || val === null){
        throw new Error ('Accessing undefined or null value.');
    }
    return val;
}

const user = {name: 'surender', age: 45};

const val = getProp(user, 'age');

const data = {id:'123', status:'married', isEmployed: true};

const v = getProp(data, 'id');

console.log(v);

// mainly demonstrates how keyof could be used.
// 
