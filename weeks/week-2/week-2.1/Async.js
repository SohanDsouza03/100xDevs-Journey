//An asynchronous function is a function that performs tasks without blocking the execution of other code.



//setTimeout() is a JavaScript function that executes a callback function after a specified delay.
// console.log("Start");

// setTimeout(function () {
//     console.log("Hello after 2 seconds");
// }, 2000);

// console.log("End");



//fs.readFile() is a Node.js function used to read the contents of a file asynchronously.

const fs = require("fs");

console.log("Start");

fs.readFile("a.txt", "utf8", function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

console.log("End");