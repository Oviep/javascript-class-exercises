
// Exercise 1
let x = parseInt( prompt("Please enter number"));
let y = parseInt( prompt("Please enter number")); 
let sum = x + y;


function checkNumbers(x, y) {
 
  
    if(sum === 50 || x === 50 || y === 50) {
       return true;
        
    } else {
        return  false;
    }

    }

let check = checkNumbers(x, y);
console.log(check)
