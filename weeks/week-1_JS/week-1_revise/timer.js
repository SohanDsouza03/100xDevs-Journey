const startTime = new Date();
let sum = 0;

const before = startTime.getTime();
console.log(before);

function fun() {
    for (let i = 0; i <= 900000000; i++) {
        sum += i;
    }
}

fun();

const endTime = new Date();
const after = endTime.getTime();

console.log(after);
console.log("Time taken: " + (after - before) / 1000 + " seconds");