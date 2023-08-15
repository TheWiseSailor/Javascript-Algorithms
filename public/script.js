// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//SOLUTION

// Define a function 'rps' that simulates a game of Rock-Paper-Scissors between two players.
const rps = (p1, p2) => {
  // Check if both players made the same choice (draw).
  if (p1 === p2) {
    return "Draw!";
  }
  // Check if Player 1 wins based on the different game outcomes.
  else if (
    (p1 === "rock" && p2 === "scissors") || // Rock beats scissors.
    (p1 === "scissors" && p2 === "paper") || // Scissors beats paper.
    (p1 === "paper" && p2 === "rock") // Paper beats rock.
  ) {
    return "Player 1 won!";
  }
  // If none of the above conditions are met, Player 2 wins.
  else {
    return "Player 2 won!";
  }
}; // Test examples console.log(rps("scissors", "paper")); // Output: "Player 1 won!" console.log(rps("scissors", "rock")); // Output: "Player 2 won!" console.log(rps("paper", "paper")); // Output: "Draw!"
//-------------------------------------------------------------------
//-------------------------------------------------------------------
// It's pretty straightforward.
//Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
//You don't have to worry with strings with less than two characters.

// Define a function 'removeChar' that takes a string 'str' as input.
function removeChar(str) {
  // Use the 'slice' method to remove the first character (index 1) and the last character (index -1) from the string.
  // The 'slice' method returns a new string that includes characters from the specified start index (inclusive) up to the specified end index (exclusive).
  // In this case, it removes the first and last characters, effectively removing the outermost characters.
  return str.slice(1, -1);
}
//-------------------------------------------------------------------
//-------------------------------------------------------------------
//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//Examples(Operator, value1, value2) --> output
//('+', 4, 7) --> 11
//('-', 15, 18) --> -3
//('*', 5, 5) --> 25
//('/', 49, 7) --> 7

//SOLUTION

// Define a function 'basicMathOperation' that performs basic mathematical operations.
// The function takes three parameters: 'operation', 'value1', and 'value2'.
function basicMathOperation(operation, value1, value2) {
  // Use a 'switch' statement to determine the operation to perform based on the 'operation' parameter.
  switch (operation) {
    // If 'operation' is "+", perform addition of 'value1' and 'value2'.
    case "+":
      return value1 + value2;
    // If 'operation' is "-", perform subtraction of 'value2' from 'value1'.
    case "-":
      return value1 - value2;
    // If 'operation' is "*", perform multiplication of 'value1' and 'value2'.
    case "*":
      return value1 * value2;
    // If 'operation' is "/", perform division of 'value1' by 'value2'.
    // Check if 'value2' is not equal to 0 before performing division to avoid division by zero.
    case "/":
      return value2 !== 0 ? value1 / value2 : "Division by zero is not allowed";
    // If 'operation' does not match any of the above cases, throw an error indicating an invalid operation.
    default:
      throw new Error("Invalid operation");
  }
} // Test cases console.log(basicMathOperation('+', 4, 7)); // Output: 11 console.log(basicMathOperation('-', 15, 18)); // Output: -3 console.log(basicMathOperation('*', 5, 5)); // Output: 25 console.log(basicMathOperation('/', 49, 7)); // Output: 7
//-------------------------------------------------------------------
//-------------------------------------------------------------------
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//SOLUTION

// Define a function 'repeatString' that repeats a given string 's' 'n' times.
// The function takes two parameters: 'n' (number of repetitions) and 's' (the string to repeat).
function repeatString(n, s) {
  // Use the 'repeat' method of the string object to repeat the string 's' 'n' times.
  // The 'repeat' method returns a new string containing the original string repeated the specified number of times.
  return s.repeat(n);
}

// Test cases
// Call the 'repeatString' function with 'n' = 6 and 's' = "I".
console.log(repeatString(6, "I")); // Output: "IIIIII"

// Call the 'repeatString' function with 'n' = 5 and 's' = "Hello".
console.log(repeatString(5, "Hello")); // Output: "HelloHelloHelloHelloHello"
//-------------------------------------------------------------------
//-------------------------------------------------------------------
// Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//SOLUTION

// Define a function 'splitStringToArray' that splits a given string 'str' into an array of substrings using a space as the separator.
// The function takes one parameter: 'str' (the string to split).
function splitStringToArray(str) {
  // Use the 'split' method of the string object to split the string 'str' into an array of substrings.
  // The 'split' method divides a string into an array of substrings based on a specified separator.
  return str.split(" ");
}

// Test cases
// Call the 'splitStringToArray' function with the string "Robin Singh".
console.log(splitStringToArray("Robin Singh"));
// Output: ["Robin", "Singh"]

// Call the 'splitStringToArray' function with the string "I love arrays they are my favorite".
console.log(splitStringToArray("I love arrays they are my favorite"));
// Output: ["I", "love", "arrays", "they", "are", "my", "favorite"]
//-------------------------------------------------------------------
//-------------------------------------------------------------------
