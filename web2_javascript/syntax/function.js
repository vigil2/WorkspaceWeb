const { match } = require("assert");
const { Console } = require("console");

console.log(1+1);
f123();
console.log(4+1);

function f123() {
    console.log(5); 
    console.log(5); 
    console.log(5); 
}

console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(first, second) { // first, second argument
    console.log(first+second);
}

sum(2,4); //2,4 argument

function sum2(first, second) { // first, second argument
    console.log("");
    return first + second;
}

console.log(sum2(2,4));