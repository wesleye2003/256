function Board() {
  this.stuff = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
}

Board.prototype.leftToRight = function() {
  return this.stuff
}

Board.prototype.topToBottom = function() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < i; j++) {
      var temp = this.stuff[i][j]
      this.stuff[i][j] = this.stuff[j][i]
      this.stuff[j][i] = temp
    }
  }
  return this.stuff
}

Board.prototype.rightToLeft = function() {
  for (var i in this.stuff) {
    this.stuff[i] = this.stuff[i].reverse();
  }
  return this.stuff
}

Board.prototype.bottomToTop = function() {
  this.topToBottom();
  this.rightToLeft();
  return this.stuff;
}
