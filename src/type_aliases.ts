// Shorted most common and repeted type value and set the types with a variable 
type stringOrNum = string | number;
type userType = { name: string, age: number }


// function
const userData: Function = (id: stringOrNum, user: userType) => {
    console.log(`Id #${id} and name is ${user.name} also age is ${user.age}`);
}


const sayHello: Function = (id: stringOrNum, user: userType) => {
    console.log("asldkfa");

}