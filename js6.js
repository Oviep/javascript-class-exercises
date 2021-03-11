// Exercise 6

function rotateLeft() {
    let ary = [1, 2, 3];
    let shift = ary.shift();
    ary.push(shift);
    return ary;
    
}

console.log(rotateLeft());
