// const amount = 20;

// if (amount < 12) {
//   console.log("Small number");
// } else {
//   console.log("Large Number");
// }

// console.log("Hello Node js!!!!");

const { Console } = require("console");
const os = require("os");

const user = os.userInfo();
console.log(user);

const uptime = os.uptime();

console.log(`The system uptime is ${uptime} seconds`);
