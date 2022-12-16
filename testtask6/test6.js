const seriesOfSquaredNumbers = require("../src/task6").seriesOfSquaredNumbers
const assert = require("chai").assert


describe("seriesOfSquaredNumbers", function(){
    it("when seriesOfSquaredNumbers uses as parameters 3 and 9, it should return 4,5,6", function(){
        let result = seriesOfSquaredNumbers(3, 9)
        assert.deepEqual(result, [4, 5, 6 ])
    })
})

describe("seriesOfSquaredNumbers", function(){
    it("when seriesOfSquaredNumbers uses as parameters 10 and 30, it should return 4,5,6", function(){
        let result = seriesOfSquaredNumbers(10, 30)
        assert.deepEqual(result, [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ])
    })
})

describe("seriesOfSquaredNumbers", function(){
    it("if seriesOfSquaredNumbers has a null parameter it should return the status and the reason", function(){
        let result = seriesOfSquaredNumbers(null)

        assert.deepEqual(result, "{status: 'failed'\n reason: 'You must enter positive numbers indicating the length of the series and the minimun square'}")
    })
})

describe("seriesOfSquaredNumbers", function(){
    it("if seriesOfSquaredNumbers has as parameter different from a number it should return the status and the reason", function(){
        let result = seriesOfSquaredNumbers("hi")

        assert.equal(result, "{status: 'failed'\n reason: 'You must enter positive numbers indicating the length of the series and the minimun square'}")
    })
})

describe("seriesOfSquaredNumbers", function(){
    it("if seriesOfSquaredNumbers has as parameter different from a number it should return the status and the reason", function(){
        let result = seriesOfSquaredNumbers(-2)

        assert.equal(result, "{status: 'failed'\n reason: 'You must enter positive numbers indicating the length of the series and the minimun square'}")
    })
})