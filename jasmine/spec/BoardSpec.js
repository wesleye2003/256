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
    board.topToBottom();
    expect(board.stuff.length).toEqual(4);
  })

  describe("#leftToRight", function() {
    it("leaves the board alone", function() {
      board = new Board()
      board.stuff = [
        ['a','b','c','d'],
        ['e','f','g','h'],
        ['i','j','k','l'],
        ['m','n','o','p']]
      board.leftToRight();
      expect(board.stuff).toEqual([
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
      board.topToBottom();
      expect(board.stuff).toEqual([
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
      board.rightToLeft();
      expect(board.stuff).toEqual([
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
      board.bottomToTop()
      expect(board.stuff).toEqual([
        ['m','i','e','a'],
        ['n','j','f','b'],
        ['o','k','g','c'],
        ['p','l','h','d']])
    })
  })

  describe("#rowPush", function() {
    it("pushes a row", function() {
      testRow = [0,0,1,1]
      rowPush(testRow)
      expect(testRow).toEqual([0,0,0,2])
    })

    it("pushes a row", function() {
      testRow = [4,0,4,0]
      rowPush(testRow);
      expect(testRow).toEqual([0,0,0,8])
    })

    it("pushes a row", function() {
      testRow = [4,2,4,2]
      rowPush(testRow)
      expect(testRow).toEqual([4,2,4,2])
    })

    it("pushes up to 4 numbers in a row together", function() {
      testRow = [1,1,1,1]
      rowPush(testRow);
      expect(testRow).toEqual([0,0,2,2])
    })
  })

  describe("#rowCanPush", function(){
    it("checks to see if #rowPush doesn't change the row" , function(){
      expect(rowCanPush([0, 1, 2, 3])).toEqual(false)
    })
    it("checks to see if #rowPush changes the row" , function(){
      expect(rowCanPush([0, 1, 2, 2])).toEqual(true)
    })
  })

  describe("#canPushThisWay", function(){
    it("check to see if you can push left to right in any row when you can", function(){
      var exampleBoard = new Board();
      exampleBoard.stuff = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,1,0,0]]
      expect(exampleBoard.canPushThisWay()).toEqual(true);
    })

    it("check to see if you can't push left to right in any row when you can't", function(){
      var exampleBoard = new Board();
      exampleBoard.stuff = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
      expect(exampleBoard.canPushThisWay()).toEqual(false);
    })
  })

  describe("#pushThisWay", function() {
    it("pushes whole board", function() {
      var exampleBoard = new Board();
      exampleBoard.stuff = [[1,1,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
      exampleBoard.pushThisWay();
      expect(exampleBoard.stuff).toEqual([[0,0,0,2], [0,0,0,0], [0,0,0,0], [0,0,0,0]]);
    })
  })

})
