// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w' || key === 'W') {
    connection.write("Move: up");
  }
  if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  }
  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  }
  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  }
};

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };