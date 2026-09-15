let names: Array<string> = ['aaa','bbb'];

type DataStore<T> = {
    [key:string]:T
}
let store : DataStore<string| number>= {};

store.username = 'sss';
store.age = 10;


