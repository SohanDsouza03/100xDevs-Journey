function logit(value, index, array) {
    console.log(value + " says hi to " + index + " from " + array);
}

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, array) => logit(value, index, array));