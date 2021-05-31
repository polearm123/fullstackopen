//defining simple functions in js

const sum = (p1,p2) => {

    console.log(p1)
    console.log(p2)
    return(p1+p2)

}

const squared = p => {

    return p**2

}

const result = sum(3,2)
const result_squared = squared(result)
console.log(result)
console.log("result squared = " , result_squared)