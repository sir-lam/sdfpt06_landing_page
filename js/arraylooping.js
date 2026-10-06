// Array stores multiple values in an ordered list (ordering is via index position - starts from 0)
const students = ["Joseph","Kevin","Jane"]
// index positions allows us to access elements inside the array 
console.log(students[0])
console.log(students.length)
// loop : repeat the same task on multiple elements 
// for loop : to loop at start i starts at 0
for(let i = 0; i < students.length; i++){
    // carry out tasks 
    const index_position = i
    if(index_position === 0 || index_position === 2){
        const results = students[index_position].toUpperCase()
        console.log(results)
    }
}

// for ....of 
// for(x of array){
//     // task 
// }
for (const student of students){
    console.log(student)
}
// forEach : runs a function for every item 
// callback function
function example(a){
    console.log(a)
    a()

}
function exampleb(){
    console.log("The function is b")
}
example(exampleb)

// array.forEach(callback function)
students.forEach((student, index) => {
    console.log(student,index)
})

// map 
// a map function creates a new array by transforming every item 
const transform_names = students.map((student) => {
    console.log(student)
    return student.toUpperCase()
})
console.log(transform_names)

// filter 
// creates a new array containing only items that will satisy a condition 
const scores = [45,72,30,85,60]
// any score that is 50 or above is a pass 
const passed = scores.filter((score) => {
      return score >= 50 
})
console.log(passed)

// reduce ()
// Iterate through an array and combine values inside the array into a single values
// for the scores array return the total score 
const total_scores = scores.reduce((finaltotal,currentscore) => {
      return finaltotal + currentscore
}, 0)
console.log(total_scores)