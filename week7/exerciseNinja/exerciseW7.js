  //function square(x) {
    //    return x*x;
    //}
//Call and Apply Methods
function sayHello(){
    return `Hello, my name is ${ this.name }`;
}
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

function sayHello(greeting='Hello'){
return `${ greeting }, my name is ${ this.name }`;
}
//Memoization

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
    square.cache[x] = x*x;
    }
return square.cache[x]
}

//Immediately Invoked Function Expressions

(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();


//Temporary Variables

let a = 1;
let b = 2;
(()=>{const temp = a;
    a = b;
    b = temp;
})();

//Initialization Code    
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date(),today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();
//Safe Use of Strict Mode
(function() {
'use strict';
// All your code would go inside this function
})();

//Creating Self-contained Code Blocks
(function() {
// block A
const name = 'Block A';
console.log(`Hello from ${name}`);
}());
(function() {
// block B
const name = 'Block B';
console.log(`Hello from ${name}`);
}());    

//Functions that Define and Rewrite Themselves

function party(){
console.log('Wow this is amazing!');
party = function(){
        console.log('Been there, got the T-Shirt');
    }
}
function party() {
    console.log('Been there, got the T-Shirt');
}
function party(){
console.log('Wow this is amazing!');
party = function(){
    console.log('Been there, got the T-Shirt');
    }
}
const beachParty = party;

//Init-Time Branching

function ride(){
if (window.unicorn) {
    ride = function(){
// some code that uses the brand new and sparkly unicorn methods
    return 'Riding on a unicorn is the best!';
}
} else {
    ride = function(){
// some code that uses the older pony methods
    return 'Riding on a pony is still pretty good';
    }
}
return ride();
}


//Recursive Functions

function collatz(n, sequence=[n]) {
    if (n === 1){
    return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }
    if (n%2 === 0) {
        n = n/2;
    } else {
        n = 3*n + 1;
    }
return collatz(n,[...sequence,n]);
}

//Promise
const dice = {
sides: 6,
roll() {
return Math.floor(this.sides * Math.random()) + 1;
}

}
console.log('Before the roll');
const roll = new Promise( (resolve,reject) => {
const n = dice.roll();
if(n > 1){
setTimeout(()=>{resolve(n)},n*200);
} else {
setTimeout(()=>reject(n),n*200);
}
});
roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );
console.log('After the roll');