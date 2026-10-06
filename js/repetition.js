// loops : statements that allow execution of code a number of times until a 
// condition is met 
// while loop : run until condition is met 
// print a number until a condition is false 
// while(condition){
//     // body of loop 
//     // terminate the loop 
        // to terminate a loop use an incrementor(add to the value ++) or
        //  decrementor(decrease the value --) based off the current condition 
// }
let i = 1 
while(i <= 10){
   // task 
    console.log("The number is " ,i)
   // end the loop
   i++
}

// for loop
// expr1 : this is executed once before the execution of the code block 
// expr2:  this is the condition to keep executing the code block : normally compared to expr1 
// expr3: this is executed everytime the codeblock is executed 
for(expr1; expr2; expr3){

}
console.log("For the for loop")
for (let i = 1; i <= 10; i++){
    console.log("The number is " , i)
}