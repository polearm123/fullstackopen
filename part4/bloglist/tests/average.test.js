const average = require('../utils/for_testing').average

describe('average', () => {
    test('average of [1]' , ()=>{
        const result = average([1])

        expect(result).toBe(1)
    })

    test('average of [1,2,3,4,5,6]' , () => {
        const result = average([1,2,3,4,5,6])

        expect(result).toBe(3.5)
    })

    test('average of empty array is zero' , () => {
        const result = average([])
        expect(result).toBe(0)
    })

})