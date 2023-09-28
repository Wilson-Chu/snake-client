const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
let conX = connect();

setupInput(conX);