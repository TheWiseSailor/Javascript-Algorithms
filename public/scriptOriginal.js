// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}; // Test examples console.log(rps("scissors", "paper")); // Output: "Player 1 won!" console.log(rps("scissors", "rock")); // Output: "Player 2 won!" console.log(rps("paper", "paper")); // Output: "Draw!"

// It's pretty straightforward.
//Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
//You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//Examples(Operator, value1, value2) --> output
//('+', 4, 7) --> 11
//('-', 15, 18) --> -3
//('*', 5, 5) --> 25
//('/', 49, 7) --> 7

function basicMathOperation(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value2 !== 0 ? value1 / value2 : "Division by zero is not allowed";
    default:
      throw new Error("Invalid operation");
  }
} // Test cases console.log(basicMathOperation('+', 4, 7)); // Output: 11 console.log(basicMathOperation('-', 15, 18)); // Output: -3 console.log(basicMathOperation('*', 5, 5)); // Output: 25 console.log(basicMathOperation('/', 49, 7)); // Output: 7

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatString(n, s) {
  return s.repeat(n);
}

// Test cases
console.log(repeatString(6, "I")); // Output: "IIIIII"
console.log(repeatString(5, "Hello")); // Output: "HelloHelloHelloHelloHello"
