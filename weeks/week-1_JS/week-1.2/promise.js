const fs = require('fs');
//filesystem module



// my own asynchronous function to read a file using fs.readFile
function SohanReadFile(){
    return new Promise(function(resolve){
        console.log("inside promise");
        fs.readFile('async.txt', 'utf-8', function(err, data){
            
                console.log("before resolve");
                resolve(data);
            });
    } )
}

//callback function to call
function onDone(data){
    console.log(data);
}

var a= SohanReadFile();
a.then(onDone);