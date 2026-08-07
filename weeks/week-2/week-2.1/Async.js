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

//An asynchronous function is a function that performs tasks without blocking the execution of other code.



const fs = require("fs");

let a = 1;
console.log(a);

fs.readFile("a.txt", "utf8", function (err, data) {
    console.log("Data read from the file is:");
    console.log(data);
});

let ans = 0;
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}

console.log(ans);

//In the above code, the readFile() function is asynchronous, which means that it does not block the execution of the code that follows it. The for loop will execute while the file is being read, and the final value of ans will be printed to the console before the data from the file is printed.



// Synchronous JavaScript
//
//        │
//        ▼
//
// Asynchronous JavaScript
//        │
//        ├──────────► Callback
//        │
//        ├──────────► setTimeout()
//        │
//        ├──────────► fs.readFile()
//        │
//        ├──────────► Promise
//        │              │
//        │              ├── resolve()
//        │              ├── reject()
//        │              ├── .then()
//        │              ├── .catch()
//        │              └── .finally()
//        │
//        └──────────► async / await