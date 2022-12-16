const findPalindrome = require("../src/task4").findPalindrome
const assert = require("chai").assert

describe("findPalindrome", function(){
    it("The number 1234437 has an inside palindrome of 3443", function(){
        let result = findPalindrome(1234437)
        assert.equal(result, 3443)
    })
})

describe("findPalindrome", function(){
    it("The number 125646589 has an inside palindrome of 56465", function(){
        let result = findPalindrome(125646589)
        assert.equal(result, 56465)
    })
})

describe("findPalindrome", function(){
    it("The number 1221 is a palindrome", function(){
        let result = findPalindrome(1221)
        assert.equal(result, 1221)
    })
})

describe("App", function(){
    it("When the parameter of findPalindrome is null it should return the status and the reason", function(){
        let result = findPalindrome(null)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter a positive number'}")
    })
})

describe("App", function(){
    it("When the parameter of findPalindrome is a string it should return the status and the reason", function(){
        let result = findPalindrome("hello")
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter a positive number'}")
    })
})