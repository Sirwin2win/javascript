// Variable is a container that stores values
const name = "John Doe"; // string
const godwin = name;
console.log(godwin);
console.log(name);
const age = 21; // integer
console.log(age);
const arr = ["Toyota", "KIA", "Ford", "Honda"]; //DRY(Don't Repeat Yourself)
console.log(arr);
/*
Ways of choosing variable names 
1. Camel case: e.g firstName, webClass, lastName
2. Pascal Case e.g FirstName, WebClass, LastName
3. Snake Case e.g first_name, web_class, last_name
Note. Variables can store any value e.g string, integer,float,arrays,objects,boolean
    Variable declaration
  1. const. constant 
  2. let. This allows us to update a variable after declaration is suitable for local scopes
  3. var. This does what const and let are doing, but it is the old way of variable declaration
    Variable Scope
  1. local scope: This is where the variable is declared inside a block of code
  2. global scope
*/
const greet = function () {
  const name2 = "Olatunji";
  console.log("Good day developer " + name2);
};
greet();
console.log(name);
