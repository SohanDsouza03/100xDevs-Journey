const arr = [10,20,30,40,50,60,40,20];

let big = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > big) {
        big = arr[i];
    }
}

console.log(big);