// Sync -> synchronous means that the code is executed in a sequential manner, one operation at a time. Each operation must complete before the next one begins. This can lead to blocking behavior, where the program waits for a task to finish before moving on to the next task.


// Async -> asynchronous means that the code can be executed in a non-blocking manner, allowing multiple operations to run concurrently. This allows the program to continue executing other tasks while waiting for certain operations (like I/O or network requests) to complete.

// Synchronous Example:

// function findsum(n){
//     let ans = 0;
//     for ( i=0;i<=n;i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// function findsumtill100(){
//     console.log(findsum(100));
// }

// //busy waiting

// function syncSleep(){
//     let a = 1;
//     for (let i = 0; i < 10000000000; i++) {
//         a ++;
//     }
// }

// syncSleep();
// findsumtill100();
// console.log("hello world");


// function findsum(n){
//     let ans = 0;
//     for ( i=0;i<=n;i++){
//         ans = ans + i;
// //     }
//     return ans;
// }

// function findsumtill100(){
//     console.log(findsum(100));
// }


// setTimeout(findsumtill100, 1000);
// console.log("hello world");

// what are common acyn functions in JS?
    // setTimeout
    // setInterval
    // Promise
    // async/await

    //fs.readFile-to read a file from the file system
    // fetch-to make HTTP requests to a server


//lets try using asys function to read a file using fs.readFile

const fs = require('fs');
//filesystem module

fs.readFile("async.txt", "utf-8", function(err, data){
    console.log(data);
});

console.log("hello world");

a=0;
for (let i = 0; i < 1000000000; i++) {
    a++;
}
console.log("done with loop");