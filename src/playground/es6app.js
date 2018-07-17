var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";

console.log('nameLet', nameLet);

const nameConst = "Frank";
//nameConst = "Jack";

console.log('nameConst', nameConst);

const fullName = "Andrew Mead";
const firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);