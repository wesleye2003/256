$(document).ready(function() {
  var game = new Game();
  var gameView = new GameView(game);
  gameView.update();
  gameView.move()
});

function GameView(game) {
  this.game = game
}

GameView.prototype.update = function() {
  for (var y in this.game.board.stuff){
    for (var x in this.game.board.stuff[y]){
      var row = $('tbody').children()[y]
      var $box = $(row.children[x])
      $box.addClass(this.game.board.stuff[y][x])
      $box.text(this.game.board.stuff[y][x])
    }
  }
}

GameView.prototype.move = function() {
  var that = this
  Mousetrap.bind("right", function() {
    that.game.board.leftToRight()
    if (that.game.board.canPushThisWay()){
      that.game.board.pushThisWay()
      that.game.board.leftToRight()
      that.game.generate();
      that.update()
      that.game.check()
      if (that.game.playable === false){
        alert("Game Over!!!!")
      };
    }else{
      that.game.board.leftToRight()
    };
  })
  Mousetrap.bind("left", function() {
    that.game.board.rightToLeft()
    if (that.game.board.canPushThisWay()){
      that.game.board.pushThisWay()
      that.game.board.rightToLeft()
      that.game.generate();
      that.update()
      that.game.check()
      if (that.game.playable === false){
        alert("Game Over!!!!")
      };
    }else{
      that.game.board.rightToLeft()
    }
  })
  Mousetrap.bind("up", function() {
    that.game.board.bottomToTop()
    if (that.game.board.canPushThisWay()){
      that.game.board.pushThisWay()
      that.game.board.rightToLeft()
      that.game.board.topToBottom()
      that.game.generate();
      that.update()
      that.game.check()
      if (that.game.playable === false){
        alert("Game Over!!!!")
      };
    }else{
      that.game.board.rightToLeft()
      that.game.board.topToBottom()
    }
  })
  Mousetrap.bind("down", function() {
    that.game.board.topToBottom()
    if (that.game.board.canPushThisWay()){
      that.game.board.pushThisWay()
      that.game.board.topToBottom()
      that.game.generate();
      that.update()
      that.game.check()
      if (that.game.playable === false){
        alert("Game Over!!!!")
      };
    }else{
      that.game.board.topToBottom()
    }
  })
}
