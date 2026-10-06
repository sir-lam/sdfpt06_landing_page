// // Hoisting : ability to invoke a function before its defination 
// // const x = greet() //invoking the function
// // console.log(x) 
// // declaritive writing 
// // function greet(){
// //     return "Hello world!!"
// // }

// // same function 
// // expression : function is anonymous and is referenced via a variable 
// // do not support hoisting 
// const greet = function(){
//     return "Hello world"
// }
// const x = greet() //invoking the function
// console.log(x) 

// // arrow function 
// const greet_arrow = () => {
//     return "hello world"
// }
// console.log(greet_arrow())


// let y = 5
// y = 10 

// scopes variable scoping 
let name = "Joseph" // globally scoped variable : accessed outside and in functions //hoisting
function printName(){
    // accessing name inside a function
    console.log(name)
} 
// accessing name outside the function after defination 
console.log(name)

// function/local scope : variable accessible inside a function 
function print_name(print_name){
    // print_name here is locally scoped (parameters)
    // any other variable defined inside the function block {....}
    const greeting = " ,welcome to the sdfpt06 cohort"
    if(print_name){
        let sum = 5 + 5 // sum is a block level variable 
        // block level variable has accessibility only inside the block
    }
    // console.log(sum) // accessing sum outside the block 
    return print_name + greeting
}
console.log(print_name("Joseph"))

// nested functions : a function defined inside another function 
// in a nested function the scope chain rule is variables defined in the outer function 
// are accesible inside the inner function and not vice versa 
// Lexical Scoping : means that the function can access variables based on where the functionn
// is written in code 
function outerFunction(){
    console.log("I am the outer function")
    let x = 5
    innerFunction()
    // console.log(y)
    function innerFunction(){
        let y = 10 
        console.log("I am the inner function")
        console.log(x)
    }
    
}

outerFunction()

// usage of nesting functions : helper functions 
  function addTax(amount){
        return amount * 0.16

    }
function calculatePrice(price){
    return price + addTax(price)
}
console.log(calculatePrice(100))

// Javascript closures : a closure occurs when a fuction remembers variables from the scope
// where it was created
function createCounter(){
    let count = 0  //maintaining private state of count 
    return function(){
        count++
        return count
    }
}
// when a function is executed the variables in its scope get dumped in memory
const counter = createCounter()
console.log(counter())
console.log(counter())

//callback function 
// Callbacks are functions passed into other functions as parameters(input for function logic)
function greet(name){
    console.log(`Hello ${name}`) //interpolated string 
    console.log("hello, " + name) // string concatanation :: joining two strings together
}

function processUser(callback){
     callback("Joseph")  //invoke parameter as a function to call the callback 
}
processUser(greet)
// 
function add(a,b,additionOperation){ // a and b are simply parameters : placeholder for expected value 
    // no validation check : data type of a and b 
    // callback is to be used inside this process 
    // print the name of the operation b4 the return output 
    additionOperation() // invoking the function that has been passed to add 
    return a + b 

}
function additionOperation(){
    console.log("This is an addition operation.")
}
// 5,5 and additionOperation are known as arguements when the function is invoked
// arguments are values passed for parameters 
console.log(add(5,5,additionOperation))
// functions can also be passed as parameters to other functions
// use cases of callbacks
// 1. Array operations 
// 2. Event handling (DOM (JS and HTML for interactive pages))
// 3. Asynchronous operations (background operations)
// 4. API requests

// Higher Order Functions 
// a function in JS is considered a HOF , if it 
// 1. Accept another function as an argument()
// 2. Returns another function 

function createMultiplier(x){

    return function(number){
        return number * x 
    }

}

const result = createMultiplier(2) // invokation "executing"
console.log(result)
console.log(result(5)) //10