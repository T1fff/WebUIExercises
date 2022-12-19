const sortingTriangles = require("../src/task3.js").sortingTriangles
const triangle = require("../src/task3.js").triangle
const assert = require("chai").assert

let arr = [new triangle("ABC", 22.36, 20, 10), new triangle("TED", 3, 4, 5), new triangle("HIJ", 5, 5, 7)]
let arr1 = []

describe("sortingTriangles", function(){
    it("if sortingTriangles has as parameter the triangles ABC, TED, HIJ the result should be [ 'ABC', 'HIJ', 'TED' ]", function(){
        let result = sortingTriangles(arr)

        assert.deepEqual(result, [ 'ABC', 'HIJ', 'TED' ])
    })
})

describe("sortingTriangles", function(){
    it("if sortingTriangles has as parameter an empty array it should return the status and the reason", function(){
        let result = sortingTriangles(arr1)

        assert.equal(result, "{status: 'failed'\n reason: 'You must enter an array with the triangles objects'}")
    })
})

describe("sortingTriangles", function(){
    it("if sortingTriangles has a null parameter it should return the status and the reason", function(){
        let result = sortingTriangles()

        assert.equal(result, "{status: 'failed'\n reason: 'You must enter an array with the triangles objects'}")
    })
})

describe("sortingTriangles", function(){
    it("if sortingTriangles has a parameter different from an array object it should return the status and the reason", function(){
        let result = sortingTriangles()

        assert.equal(result, "{status: 'failed'\n reason: 'You must enter an array with the triangles objects'}")
    })
})





