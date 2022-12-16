
const enclosingEnvelopes = require("../src/task2.js").enclosingEnvelopes
const Envelope = require("../src/task2.js").Envelope
const assert = require("chai").assert

const envelope1 = new Envelope("envelope1", 12, 6);
const envelope2 = new Envelope("envelope2", 10, 5);

const envelope3 = new Envelope("envelope1", 10, 6);
const envelope4 = new Envelope("envelope2", 8, 7);

const arr = []



describe("App", function(){
    it("An envelope with sides 12 and 6 can store another envelope of size 10 and 5, function should return 1", function(){
        let result = enclosingEnvelopes(envelope1, envelope2)
        assert.equal(result, 1)
    })

})

describe("App", function(){
    it("An envelope with sides 10 and 6 can't store another envelope of size 8 and 7, function should return 0", function(){
        let result = enclosingEnvelopes(envelope3, envelope4)
        assert.equal(result, 0)
    })

})

describe("App", function(){
    it("When the parameters of enclosingEnvelopes are empty it should return the status and the reason", function(){
        let result = enclosingEnvelopes()
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter 2 objects each representing 2 different envelopes'}")
    })
})

describe("App", function(){
    it("When the parameters of enclosingEnvelopes is null it should return the status and the reason", function(){
        let result = enclosingEnvelopes(null)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter 2 objects each representing 2 different envelopes'}")
    })
})

describe("App", function(){
    it("When the parameters of enclosingEnvelopes are an empty object it should return the status and the reason", function(){
        let result = enclosingEnvelopes(arr)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter 2 objects each representing 2 different envelopes'}")
    })
})

