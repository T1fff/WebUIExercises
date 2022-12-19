const assert = require("chai").assert
const drawChessboard = require("../src/task1").drawChessboard

describe("App", function(){
    it("chessBoard should return string", function(){
        let result = drawChessboard(2, 2)
        assert.typeOf(result, "string")
    })

})

describe("chessBoard", function(){
    it("chessBoard should return a 3 x 3 table", function(){
        let result = drawChessboard(3, 3, "*")
        assert.equal(result, "* *\n * \n* *\n")
    })
})

describe("chessBoard", function(){
    it("chessBoard should return a 4 x 5 table", function(){
        let result = drawChessboard(4, 5, "*")
        assert.equal(result, "* * *\n * * \n* * *\n * * \n")
    })
})

describe("chessBoard", function(){
    it("When the parameters of chessBoard are empty it should return the status and the reason", function(){
        let result = drawChessboard()
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter numbers indicating height and width'}")
    })
})

describe("chessBoard", function(){
    it("When the parameters of chessBoard are null it should return the status and the reason", function(){
        let result = drawChessboard(null)
        assert.equal(result, "{status: 'failed'\n reason: 'You must enter numbers indicating height and width'}")
    })
})

describe("chessBoard", function(){
    it("When the parameters of chessBoard are negatives it should return the status and the reason", function(){
        let result = drawChessboard(-5, -6)
        assert.equal(result, "{status: 'failed'\n reason: 'height and width should be positive numbers'}")
    })
})

