// function name1(a,b,fnToCall){
//     const sum=a+b;
//     fnToCall(sum);
// }
// function display(s){
//     console.log(s+ "  is the sum");
// }
// name1(1,2,display);

function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOfSomething(a,b,callback){
    let val1=callback(a)
    let val2=callback(b)
    return val1 + val2;
}

let ans = sumOfSomething(2,3,square);
console.log(ans);

let ans2 = sumOfSomething(2,3,cube);
console.log(ans2);