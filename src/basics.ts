

// class User{
//     name: string;
//     age: number;
    
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
class User {
    readonly dob: string = "20/02/2020";
    constructor(public name: string, public age: number) {}

}
const max = new User("Max", 30);
const anna = new User("Anna", 25);
console.log(max, anna);
max.age=16;
console.log(max);


//max.dob = "20/02/2021"; // Error: Cannot assign to 'dob' because it is a read-only property.

class Animal {
    constructor(protected name: string, private species: string) {}
    get fullName() {
        return this.name;
    }
    get speciesName() {
        return this.species;
    }
    // set fullName(name: string) {
    //     if(name.length < 3) {
    //         throw new Error("Name must be at least 3 characters long.");
    //     }
    //     this.name = name;
    // }
    set speciesName(species: string) {
        if(species.length < 3) {
            throw new Error("Species must be at least 3 characters long.");
        }
        this.species = species;
    }
    static eID = "ANIMAL-001";
    static greet(){
        console.log("Hello from Animal class!");
    }
}
console.log(Animal.eID);
Animal.greet();
const dog = new Animal("Dog", "Canine");
console.log(dog);
console.log(dog.fullName); 
console.log(Animal.eID);

// dog.fullName = "Doggo";
console.log(dog.fullName);

//console.log(dog.eID); this is not possible because eID is a static property 
// and can only be accessed through the class itself, not through an instance of the class.

class SkyAnimal extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
    }
    set fullName(name: string) {
        if(name.length < 3) {
            throw new Error("Name must be at least 3 characters long.");
        }
        this.name = name;
    }
    wingSpan: number = 0;
    fly(duration: number) {
        console.log(`${this.fullName} is flying with a wing span of ${this.wingSpan} meters for ${duration} minutes.`);
    }
}

const eagle = new SkyAnimal("Eagle", "Bird");
eagle.wingSpan = 2.5;
eagle.fullName = "Golden Eagle";
console.log(eagle);
eagle.fly(30);


//abstract class 
abstract class Vehicle {
    constructor(public make: string, public model: string) {}
    abstract start(): void;
    abstract stop(): void;
}
// cannot create an instance of an abstract class
// const vehicle = new Vehicle("Toyota", "Camry"); // Error: Cannot create an instance of an abstract class

class car extends Vehicle {
    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
    stop() {
        console.log(`${this.make} ${this.model} is stopping.`);
    }
}

const myCar = new car("Toyota", "Camry");
myCar.start();
myCar.stop();

class Bike extends Vehicle {
    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }
    stop() {
        console.log(`${this.make} ${this.model} is stopping.`);
    }
}

const myBike = new Bike("Honda", "CBR");
myBike.start();
myBike.stop();

class Destroy {
    shred(Vehicle: Vehicle) {

        // Implementation for shredding a vehicle
        console.log(`Shredding ${Vehicle.make} ${Vehicle.model}`);

    }
    checkStartStop(Vehicle: Vehicle) {
        console.log(`destroyer checking start and stop for ${Vehicle.make} ${Vehicle.model}`);
        Vehicle.start();
        Vehicle.stop();
    }
}

const destroyer = new Destroy();
destroyer.checkStartStop(myCar);
destroyer.checkStartStop(myBike);
destroyer.shred(myCar);
destroyer.shred(myBike);

// interface
interface Authenticatable {
    authenticate(username: string, password: string): boolean;
}

// interface usage as object type
const user: Authenticatable = {
    authenticate(username: string, password: string): boolean {
        // Implementation for authentication
        return username === "admin" && password === "password";
    }
};

console.log(user.authenticate("admin", "password")); // true
console.log(user.authenticate("user", "pass")); // false

//interface usage as class type
class Admin implements Authenticatable {
    constructor(private username: string, private password: string) {}
    authenticate(username: string, password: string): boolean {
        return this.username === username && this.password === password;
    }
}

const admin = new Admin("admin", "password");
console.log(admin.authenticate("admin", "password")); // true
console.log(admin.authenticate("user", "pass")); // false

function auth(user: Authenticatable, username: string, password: string): boolean {
    return user.authenticate(username, password);
}

console.log(auth(user, "admin", "password")); // true
console.log(auth(admin, "admin", "password")); // true
console.log(auth(admin, "user", "pass")); // false

interface a{
    a(): void;
}
interface b extends a{
    b(): void;
}
interface c extends b{
    c(): void;
}
class ABC implements c{
    a(): void {
        console.log("a");
    }
    b(): void {
        console.log("b");
    }
    c(): void {
        console.log("c");
    }
}

const abc = new ABC();
abc.a();
abc.b();
abc.c();