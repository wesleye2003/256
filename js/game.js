function Game() {
  this.initialize();
  this.playable = true
}

Game.prototype.initialize = function() {
  this.board = new Board()
  this.generate()
  this.generate()
}

Game.prototype.generate = function() {
  var randRow = randomIndex()
  var randCol = randomIndex()
  if (this.board.stuff[randRow][randCol] === 0) {
    this.board.stuff[randRow][randCol] = twoOrFour();
  } else {
    this.generate();
  }
}

function randomIndex() {
  return Math.floor(4*Math.random())
}

function twoOrFour() {
  var chance = Math.random()
  if (chance >= 0.66){
    return 4
  }else{
    return 2
  }
}

// Board.prototype.canPushAny
// this.rightToLeft
// if (this.canPushThisWay())
  // loop and push all rows
  // generate new number
