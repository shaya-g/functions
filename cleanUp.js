// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();

// I added a semi-colon to the end of the console log statement in the declaration because otherwise it would not run.
//I also added a semi-colon to the end of the call.



// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third;
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

//I added a semi-colon after the word "third" in the definition.
//We must add a semi-colon after each line of code.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

//I changed the word "func" to "function" at the beginning of the definition of the function.
// This is simply a matter of syntax.


//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
    var avg = sum / 2;
  console.log(`the average is: ${avg}`);
  }

  average(98, 56);
// I added the call after the definition, by including:  average(98, 56);. This is vital because otherwise nothing will be plugged in and the function will not operate.
//I also removed the period in the console log statement and added a semi-colon after the console log statement.
