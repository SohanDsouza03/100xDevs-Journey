// const fs = require('fs');
// //filesystem module



// // my own asynchronous function to read a file using fs.readFile
// function SohanReadFile(){
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile('async.txt', 'utf-8', function(err, data){
            
//                 console.log("before resolve");
//                 resolve(data);
//             });
//     } )
// }

// //callback function to call
// function onDone(data){
//     console.log(data);
// }

// var a= SohanReadFile();
// a.then(onDone);

// function SohanAsyncFn(){
//     let p = new Promise(function(resolve){
//         //do some async logic here
//         setTimeout(function(){
//             resolve("done with async logic");
//         }, 3000);
//     });

//     return p;
// }

// async function main(){
//     //no callbacks, no .then syntax, just like synchronous code
//     //SohanAsyncfn().then(function(value){
//     //    console.log(value);
//     //});   

//     let value = await SohanAsyncFn();
//     console.log("hi there 1");
// }
// main();
// console.log("after main");




// using async/await syntax to write asynchronous code in a more synchronous way
function SohanAsyncFn(){
    let p = new Promise(function(resolve){
        //do some async logic here
        resolve("hi there!");
    });
    return p;
}

async function main(){                    //any function which has await keyword in it should be declared as async function
    const value = await SohanAsyncFn();  //rather than using .then syntax, we can use await keyword to wait for the promise to resolve and get the value directly
    console.log(value);
}

main();



/// using callback syntax
function SohanAsyncFnWithCallback(callback){
    //do some async logic here
    callback("hi there!");
}
async function mainWithCallback(){
    SohanAsyncFnWithCallback(function(value){
        console.log(value);
    });
}
mainWithCallback();

// using promise syntax
function SohanAsyncFnWithPromise(){

    let p = new Promise(function(resolve){
        //do some async logic here
        resolve("hi there!");
    });
    return p;           
}

function mainWithPromise(){
    SohanAsyncFnWithPromise().then(function(value){
        console.log(value);
    });
}
mainWithPromise();