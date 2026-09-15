type AppUser = {
    name: string,
    age: number,
    permissions: {
        id:string,
        title: string,
        description: string
    }[]
}

type Perms =  AppUser['permissions']; 
// sets Perms to the type of permissions object 
// extracts type set for permission from AppUser
// this can be used on arrays as well to extract the 
// value type of elements.


const cars:string[] = ['toyota','tesla','byd'];

type Car = typeof cars[number];
//  it extracts the type of an array element
const firstCar: Car = cars[0];






