const hobbies: string[] = ["Reading", "Traveling", "Cooking"];
const activeHobbies: Array<string> = ["Movie", "Swimming"];
hobbies.push("Hiking"); //adding a new hobby to the array
hobbies.push(...activeHobbies); //adding all hobbies from activeHobbies array to hobbies array
hobbies.pop(); //removing the last hobby from the array
hobbies.unshift("Swimming"); //adding a new hobby to the beginning of the array
hobbies.shift(); //removing the first hobby from the array

console.log(hobbies); //printing the updated hobbies array
console.log(hobbies.includes("Traveling")); //checking if "Traveling" is in the hobbies array
console.log(hobbies.includes("Hiking")); //checking if "Hiking" is in the hobbies array

console.log(hobbies.indexOf("Cooking")); //getting the index of "Cooking" in the hobbies array
console.log(hobbies.indexOf("xxx")); //getting the index of "xxx" in the hobbies array, which will return -1 since it's not present
console.log(hobbies.find(hobby => hobby === "Reading")); //finding "Reading" in the hobbies array
console.log(hobbies.find(hobby => hobby=== "xxx")); //finding "xxx" in the hobbies array, which will return undefined since it's not present

hobbies.indexOf("Cooking") !== -1 ? console.log("Cooking is in the hobbies array") : console.log("Cooking is not in the hobbies array"); 
//checking if "Cooking" is in the hobbies array using indexOf

console.log(hobbies.some(hobby => hobby === "Traveling")); //checking if "Traveling" is in the hobbies array using some
console.log(hobbies.some(hobby => hobby === "xxx")); //checking if "xxx" is in the hobbies array using some

console.log(hobbies.every(hobby => hobby.length > 3)); //checking if every hobby in the hobbies array has a length greater than 3

const areHobbiesValid = hobbies.every(hobby => {
	const trimmedHobby = hobby.trim();
	const startsWithUppercase = trimmedHobby[0] === trimmedHobby[0]?.toUpperCase();
	const containsOnlyLetters = /^[A-Za-z]+$/.test(trimmedHobby);

	return trimmedHobby.length >= 5 && startsWithUppercase && containsOnlyLetters;
});

console.log(areHobbiesValid); // true only if every hobby passes all three checks
console.log(hobbies.map(hobby =>"test")); //printing each hobby in uppercase
console.log(hobbies.map(hobby => hobby.toUpperCase())); //printing each hobby in uppercase
console.log(hobbies.map(hobby => hobby+"!"  )); //printing each hobby in uppercase

hobbies.map(hobby => hobby.toUpperCase()).forEach(hobby => console.log(hobby)); //printing each hobby in uppercase

const hobbyDetails = hobbies.map(hobby => ({
	name: hobby,
	length: hobby.length,
}));
console.log(hobbyDetails); //creating a new object for each hobby
console.log('--------------------');
console.log(hobbies.filter(hobby => hobby.length > 6)); //filtering hobbies with length greater than 6
hobbies.filter(hobby => hobby.length > 6).forEach(hobby => console.log(hobby)); //filtering hobbies with length greater than 6 and printing them

hobbies.reduce((accumulator, currentHobby) => {
    console.log(`Accumulator: ${accumulator}, Current Hobby: ${currentHobby}`);
    return accumulator + ", " + currentHobby;
}, "Hobbies"); //reducing the hobbies array to a single string

const numbers = [10, 20, 30];
const total = numbers.reduce((sum, number) => sum + number, 10);
console.log(total); // adding all numbers into one total: 70



// ***********map vs reduce***********
// map is used to transform each element of an array into a new array, 
// while reduce is used to reduce an array to a single value.
// map returns a new array with the same number of elements as the original array, 
// while reduce returns a single value.
// map is used when you want to transform each element of an array, 
// while reduce is used when you want to combine all elements of an array into a single value.

console.log('--------------------');
console.log(hobbies.flat()); //flattening the hobbies array, but since it's a 1D array, it will return the same array

const twoD = [[10, 20], [30, 40], [50, 60]];
console.log(twoD.flat()); //flattening the 2D array into a 1D array

hobbies.forEach(hobby => console.log(hobby)); //printing each hobby in the hobbies array
console.log('**********');
hobbies.slice(1, 3).forEach(hobby => console.log(hobby)); //printing hobbies 
//from index 1 to 2 (3 is not included)

hobbies.splice(1, 2, "New Hobby 1", "New Hobby 2"); //removing 2 hobbies from index 1 and adding 2 new hobbies
console.log(hobbies); //printing the updated hobbies array

const newHobbies = hobbies.slice(1, 3); //creating a new array with hobbies from index 1 to 2 (3 is not included)
console.log(newHobbies); //printing the new hobbies array

console.log(hobbies.concat(newHobbies)); //concatenating the hobbies array with the new hobbies array
console.log('--------------------');
console.log([...activeHobbies, ...hobbies]); //concatenating the activeHobbies array with the hobbies array using spread operator
console.log([...['aaa','bbb'], ...hobbies]); //concatenating the activeHobbies array with the hobbies array using spread operator

console.log('--------------------');
console.log(hobbies);
console.log(hobbies.sort()); //sorting the hobbies array in ascending order
console.log(hobbies);

console.log(hobbies.reverse()); //reversing the hobbies array

console.log(hobbies.join(' - ')); //joining the hobbies array into a string with ', ' as separator



