describe("Board", function() {

  it("exists", function() {
    board = new Board()
    expect(board).toBeDefined()
  })

  it("has a height of 4", function(){
    board = new Board()
    expect(board.stuff.length).toEqual(4);
  })

  it("has a width of 4", function(){
    board = new Board()
    expect(board.topToBottom().length).toEqual(4);
  })

  describe("#leftToRight", function() {
    it("leaves the board alone", function() {
      board = new Board()
      board.stuff = [
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']]
      expect(board.leftToRight()).toEqual([
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']])
    })
  })

  describe("#topToBottom", function() {
    it("transposes the board", function() {
      board = new Board()
      board.stuff = [
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']]
      expect(board.topToBottom()).toEqual([
        ['a','e','i','m'],
        ['b','f','j','n'],
        ['c','g','k','o'],
        ['d','h','l','p']])
    })
  })

  describe("#rightToLeft", function() {
    it("reverses the board", function() {
      board = new Board()
      board.stuff = [
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']]
      expect(board.rightToLeft()).toEqual([
        ['d','c','b','a'],
        ['h','g','f','e'],
        ['l','k','j','i'],
        ['p','o','n','m']])
    })
  })

  describe("#bottomToTop", function() {
    it("transposes then reverses the board", function() {
      board = new Board()
      board.stuff = [
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']]
      expect(board.bottomToTop()).toEqual([
        ['m','i','e','a'],
        ['n','j','f','b'],
        ['o','k','g','c'],
        ['p','l','h','d']])
    })
  })

})
