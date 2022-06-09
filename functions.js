// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log("Hey! How are you doing today?");
}

printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

function interpolateSomething(name) {
  console.log(`Hello my name is ${name}.`);
}

interpolateSomething("Todd");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).

function companyExample(companyName, num1, num2) {
  var payRange = num1 - num2;
  console.log(`Hello, we are ${companyName}. Our pay range is ${payRange}.`);
}

companyExample("Facebook", 800,000, 600,000);

// 4: Write a function that satifies the following interaction pattern:

function checkStock(num, word) {
if (num === 4) {console.log(`${word} is stocked`)}
else if (num <= 3 && num >= 1) {console.log(`${word} - running LOW`)}
else if (num === 0) {console.log(`${word} - OUT of stock!`)};
}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
