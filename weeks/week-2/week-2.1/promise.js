// A Promise is an object that represents the eventual completion or failure of an asynchronous operation.




//before promise JavaScript used callbacks. like this

// login(function(){

//     getProfile(function(){

//         getPosts(function(){

//             getComments(function(){

//                 console.log("Done");

//             });

//         });

//     });

// });

// thats called callback hell. to avoid that we use promises. 
     


// function login() {

//     return new Promise(function(resolve){

//         setTimeout(function(){

//             console.log("User Logged In");

//             resolve();

//         },2000);

//     });

// }

// function getProfile(){

//     return new Promise(function(resolve){

//         setTimeout(function(){

//             console.log("Profile Loaded");

//             resolve();

//         },2000);

//     });

// }

// function getPosts(){

//     return new Promise(function(resolve){

//         setTimeout(function(){

//             console.log("Posts Loaded");


//         },2000);

//     });

// }

// function getComments(){

//     return new Promise(function(resolve){

//         setTimeout(function(){

//             console.log("Comments Loaded");

//             resolve();

//         },2000);

//     });

// }

// login()
// .then(getProfile)
// .then(getPosts)
// .then(getComments)
// .then(function(){

//     console.log("All Data Loaded");

// });



// 1. new Promise()
// Definition

// new Promise() creates a new Promise object.



// const promise = new Promise(function (resolve, reject) {
//     console.log("Promise Created");
// });



// 2. resolve()
// Definition

// resolve() is used to complete a Promise successfully.



// const promise = new Promise(function (resolve) {
//     resolve("Login Successful");
// });

// promise.then(function (message) {
//     console.log(message);
// });






// 3. reject()
// Definition

// reject() is used when a Promise fails.


// const promise = new Promise(function (resolve, reject) {
//     reject("Login Failed");
// });

// promise.catch(function (error) {
//     console.log(error);
// });






// 4. .then()
// Definition

// .then() executes when the Promise is fulfilled.



// function login() {
//     return Promise.resolve("Welcome Sohan");
// }

// login().then(function (message) {
//     console.log(message);
// });










// 5. .catch()
// Definition

// .catch() executes when the Promise is rejected.

// function login() {
//     return Promise.reject("Invalid Password");
// }

// login().catch(function (error) {
//     console.log(error);
// });





// 6. .finally()
// Definition

// .finally() executes whether the Promise succeeds or fails.




// Promise.resolve("Done")
//     .then(function (message) {
//         console.log(message);
//     })
//     .finally(function () {
//         console.log("Operation Completed");
//     });








function login(success) {

    return new Promise(function (resolve, reject) {

        setTimeout(function () {

            if (success) {
                resolve("✅ Login Successful");
            } else {
                reject("❌ Login Failed");
            }

        }, 2000);

    });

}

login(true)

.then(function (message) {

    console.log(message);

})

.catch(function (error) {

    console.log(error);

})

.finally(function () {

    console.log("Login Process Finished");

});