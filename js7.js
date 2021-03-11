// Exercise 7
function tripleSum(x, y) {
    let sum;
    if(x === y) {
        sum = 3 *(x + y);
    } else {
        sum = x + y;
    }
    return sum;
}

console.log(tripleSum(10, 40));