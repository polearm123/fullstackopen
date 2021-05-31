
const t = [1,-1,3]

//this can happen as an array is an object
//const will always point to the same objects
//the contents of the object can change however

// t.push(5) does same as below but with old object instead of creating a new array
concat_t = t.concat(5)

console.log("length is",t.length)
console.log("array element at index 2 is: " ,t[1])

// simple iteration over array
t.forEach(value=>{

    console.log(value)

})

//mapping: mapping each value in an array to another

const mapped_1 = concat_t.map((value) => value ** 2)

console.log(mapped_1)