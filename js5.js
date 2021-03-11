
// Exercise 5
let amount1 = parseInt( prompt("Please enter amount1"));
let amount2 = parseInt( prompt("Please enter amount2")); 

function addWithSubcharge(a, b) {
    let subcharge = amount1 + amount2

    if(amount1 && amount2 <= 10) {
        subcharge +=1
    } else {
        subcharge += 2;
    }
    return subcharge;

}

console.log(addWithSubcharge(amount1, amount2))