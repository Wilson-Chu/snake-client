// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w' || key === 'W') {
    console.log("Move: up");
  }
  if (key === 'a' || key === 'A') {
    console.log("Move: left");
  }
  if (key === 's' || key === 'S') {
    console.log("Move: down");
  }
  if (key === 'd' || key === 'D') {
    console.log("Move: right");
  }
};

// setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };