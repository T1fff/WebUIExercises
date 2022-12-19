const fibonacciSeries = require("../src/task7").fibonacciSeries
const Context = require("../src/task7.js").Context
const assert = require("chai").assert

const context1 = new Context(2, 15)
const Fiblength = 10
const arr = []


describe("fibonacciSeries", function(){
    it("fibonacciSeries should return 3, 5, 8, 13", function(){
        let result = fibonacciSeries(context1)
        assert.deepEqual(result, [3, 5, 8, 13 ])
    })
})

describe("fibonacciSeries", function(){
    it("chessBoard should return 1, 2, 3, 5, 8", function(){
        let result = fibonacciSeries(Fiblength)
        assert.deepEqual(result, [ 1, 2, 3, 5, 8 ])
    })
})

describe("fibonacciSeries", function(){
    it("if fibonacciSeries has a negative parameter it should return the status and the reason", function(){
        let result = fibonacciSeries(-5)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter an object specifiying the length or the min and max value'}")
    })
})

describe("fibonacciSeries", function(){
    it("if fibonacciSeries has a null parameter it should return the status and the reason", function(){
        let result = fibonacciSeries()
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter an object specifiying the length or the min and max value'}")
    })
})

describe("fibonacciSeries", function(){
    it("if fibonacciSeries  has a parameter different from an array object which specifies the min and max values it should return the status and the reason", function(){
        let result = fibonacciSeries(arr)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter an object specifiying the length or the min and max value'}")
    })
})




