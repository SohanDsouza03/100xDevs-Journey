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

function SohanAsyncFn(){
    let p = new Promise(function(resolve){
        //do some async logic here
        setTimeout(function(){
            resolve("done with async logic");
        }, 3000);
    });

    return p;
}

async function main(){
    //no callbacks, no .then syntax, just like synchronous code
    //SohanAsyncfn().then(function(value){
    //    console.log(value);
    //});   

    let value = await SohanAsyncFn();
    console.log("hi there 1");
}
main();
console.log("after main");