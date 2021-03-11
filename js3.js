// Exercise 3
let A;
let s;
let a = 5;
let b = 6;
let c = 7

function scaleneTriangle() {
    s = (5 + 6 + 7)/2
    A = Math.sqrt(s*((s - a)*(s - b)*(s -c)));
    return A;
}

console.log(scaleneTriangle());