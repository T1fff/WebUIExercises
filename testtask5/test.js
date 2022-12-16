const findingTicketType = require("../src/task5").findingTicketType
const Context = require("../src/task5.js").Context
const Result = require("../src/task5.js").Result
const assert = require("chai").assert

const context3 = new Context(100000, 100010)
const context4 = new Context(100000 , 100100)
const arr = []

const functionresult = new Result("Simple", 2, 0)
const functionresult1 = new Result("Complicated", 3, 8)


describe("App", function(){
    it("findingTicketType should return a result object with 'SImple', 2, 0", function(){
        let result = findingTicketType(context3)
        assert.deepEqual(result, functionresult)
    })
})

describe("App", function(){
    it("findingTicketType should return a result object with 'Complicated', 3, 8", function(){
        let result = findingTicketType(context4)
        assert.deepEqual(result, functionresult1)
    })
})

describe("App", function(){
    it("When the parameter of findingTicketType are empty it should return the status and the reason", function(){
        let result = findingTicketType()
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter a Context object with the min and max attributes'}")
    })
})

describe("App", function(){
    it("When the parameter of findingTicketType is an incorrect object it should return the status and the reason", function(){
        let result = findingTicketType(arr)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter a Context object with the min and max attributes'}")
    })
})

describe("App", function(){
    it("When the parameter of findingTicketType is a string it should return the status and the reason", function(){
        let result = findingTicketType(arr)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter a Context object with the min and max attributes'}")
    })
})


