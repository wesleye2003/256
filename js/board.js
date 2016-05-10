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
}

Board.prototype.rightToLeft = function() {
  for (var i in this.stuff) {
    this.stuff[i] = this.stuff[i].reverse();
  }
}

Board.prototype.bottomToTop = function() {
  this.topToBottom();
  this.rightToLeft();;
}

//////// Push it

Board.prototype.pushThisWay = function() {
  for (var i in this.stuff) {
    rowPush(this.stuff[i])
  }
}

function rowPush(row) {
  for (var i = 2; i >= 0; i--) {
    if (row[i] === row[i+1]) {
      row[i+1] *= 2
      row[i] = 0
    } else if (row[i+1] === 0) {
      row[i+1] = row[i]
      row[i] = 0
      rowPush(row);
    }
  }
}

//////// Bools

Board.prototype.canPushThisWay = function() {
  return this.stuff.some(rowCanPush)
}

function rowCanPush(array) {
  var oldArray = arrCopy(array)
  rowPush(oldArray)
  return !arrEqual(array, oldArray)
};

//////// Helper methods

function arrEqual(a,b) {
  if (a.length !== b.length) {
    return false
  }
  for (var i in a) {
    if (a[i] !== b[i]) {
      return false
    }
  }
  return true
}

function arrCopy(a) {
  var b = []
  for (var i in a) {
    b.push(a[i])
  }
  return b
}
