// function sum(a,b){
//     return a+b;
// }
// const a= sum(1,2);
// console.log(a);

function findsum(n){
    let ans = 0;
    for ( i=0;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}

let ans = findsum(100);
console.log(ans);
