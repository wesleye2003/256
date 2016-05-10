describe("Game", function() {

  it("exists", function() {
    game = new Game()
    expect(game).toBeDefined()
  })

  it("has a board", function() {
    game = new Game()
    expect(game.board).toBeDefined()
  })

  describe("#randomIndex", function() {
    it("gives a number in [0,4)", function() {
      for (var i = 0; i < 100; i++) {
        expect([0,1,2,3]).toContain(randomIndex())
      }
    })
  })

  describe("#twoOrFour", function() {
    it("gives a number in {2,4}", function() {
      for (var i = 0; i < 100; i++) {
        expect([2,4]).toContain(twoOrFour())
      }
    })
  })

  describe("#generate", function() {
    it("has a nonzero cell", function() {
      for (var i = 0; i < 100; i++) {
        var game = new Game()
        game.board.stuff = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
        game.generate()
        var nonzeroes = 0;
        for (var y in game.board.stuff){
          var row = game.board.stuff[y]
          for (var x in row){
            if (row[x] !== 0){
              nonzeroes += 1
            }
          }
        }
        expect(nonzeroes).toEqual(1)
      }
    })
  })

  describe("#initialize", function() {
    it("has two nonzero cells", function() {
      for (var i = 0; i < 100; i++) {
        var game = new Game()
        var nonzeroes = 0;
        for (var y in game.board.stuff){
          var row = game.board.stuff[y]
          for (var x in row){
            if (row[x] !== 0){
              nonzeroes += 1
            }
          }
        }
        expect(nonzeroes).toEqual(2)
      }
    })
  })

})
