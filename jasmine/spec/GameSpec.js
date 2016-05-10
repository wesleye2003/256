describe("Game", function() {

  // beforeEach(function() {
  //   game = new Game()
  // })

  it("exists", function() {
    game = new Game()
    expect(game).toBeDefined()
  })

  it("has a board", function() {
    game = new Game()
    expect(game.board).toBeDefined()
  })

})
