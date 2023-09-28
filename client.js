const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write("Name: WC");
    console.log("Successfully connected to game server");

    // for (let i = 0; i < 3; i++) {
    //   setTimeout(() => conn.write("Move: up"), 50 * i);
    // }

    // setInterval(() => conn.write("Move: up"), 50);

  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  return conn;
};

module.exports = { connect };