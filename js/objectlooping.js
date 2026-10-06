// objects work differently because they contain key and value pairs 
const student = {
    "fullname" :"Joseph",
    "course" : "Sofware Development",
    "admission" : 2334
}
// access of the value is via the key 
// for ... in loop 
for(const key in student){
    console.log(key)
    // to get the value represented by a key 
    console.log(student[key])
}
// look up methods 
// Object.keyS() : return an array of keys belonging to object 
const keys  = Object.keys(student)
console.log(keys)
// Object.values() : returns an array of values belonging to object 
const values = Object.values(student)
console.log(values)
// Object.entries : returns an array whose value are array combos of key and value pairs 
const entries = Object.entries(student)
console.log(entries)
// another way of accessing object value is via the dot notation
console.log(student.fullname)
console.log(student["course"]) // square bracket notation

// combined operations 
// filter for a value inside a nested object 
const students = [
    {
        "name" : "Brian",
        "details" : {
            "age" :  29,
            "course" : "Software Development"
         }
    },
    
    {
        "name" : "Mary",
        "details" : {
            "age" :  22,
            "course" : "Data Science"
         }
    },

    {
        "name" : "John",
        "details" : {
            "age" :  25,
            "course" : "Software Development"
         }
    },
]

// suppose we want students whose course is software development 
console.log(students[2].name)
const result = students.filter((student) => {
        console.log(student)
        console.log(student.details.course)
        return student.details.course === "Software Development"
})
console.log(result)