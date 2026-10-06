const numbers = [1,2,3,4,5]
const fruits = ["apple","banana","orange"]
const mix_types = ["apple",1,true,4.5,null,undefined]

// array operations : inbuilt operations that can receive functions as arguments 
// majority are callback operations 
// .map, .filter, .reduce, .forEach (array looping)
// .map -> change elements inside the array : new array with the change 
// - double every single number in the numbers array * 2 
const doubled = numbers.map((n) => {
    return n * 2
} )
console.log(doubled)
// .filter is used to choose elements in the array based off a condition 
// returns a new array 
const even = numbers.filter((n) => {
     let modulus_value = n % 2 
     return modulus_value === 0
})
console.log(even)
// reduce : accumulation -> combine a result 
// give the sum of the numbers in the numbers array 
// returns a single value
const total = numbers.reduce((currentResult,n) => currentResult + n,0)
console.log(total)

// let cartvalues = [10000,300,500] = simply use reduce to get the cart value

// foreach - loop : only used for arrays
fruits.forEach((fruit) => console.log(fruit))
// capitilize the fruits inside the fruits 
fruits.forEach((fruit) => console.log(fruit.toUpperCase()))
// filter the numbers for even numbers then multiply each number by 10 
const result = numbers.filter(n => n % 2 === 0).forEach(n => {
    console.log(n * 10)
})
