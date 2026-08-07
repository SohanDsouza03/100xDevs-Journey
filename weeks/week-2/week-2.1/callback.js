// A callback is a function that is given to another function to be used later.

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, callbackFn) {
    let value1 = callbackFn(a);
    let value2 = callbackFn(b);

    return value1 + value2;
}

let ans = sumOfSomething(2, 3, square);
console.log(ans);   // 13

let ans2 = sumOfSomething(2, 3, cube);
console.log(ans2);  // 35