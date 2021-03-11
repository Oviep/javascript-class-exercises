// Exercise 2
let a = parseInt( prompt("Please enter number"));
let b = parseInt( prompt("Please enter number")); 

function checkNumbers2 (a, b) {
    if(a > 0 && b < 0) {
        return true
    } else {
        return false
    }
}

console.log(checkNumbers2(a, b))
