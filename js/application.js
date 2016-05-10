$(document).ready(function() {
  var game = new Game();
  var gameView = new GameView(game);
  gameView.update();

  // while (game.playable) {

  gameView.move()

  if (game.playable === false){
    alert("Game Over!!!!")
  }
    // all the push stuff
    // thing.on(button, gameView.move(dir))

  // }

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
    that.game.board.pushThisWay()
    that.game.board.leftToRight()
    that.update()
  })
  Mousetrap.bind("left", function() {
    that.game.board.rightToLeft()
    that.game.board.pushThisWay()
    that.game.board.rightToLeft()
    that.update()
  })
  Mousetrap.bind("up", function() {
    that.game.board.bottomToTop()
    that.game.board.pushThisWay()
    that.game.board.rightToLeft()
    that.game.board.topToBottom()
    that.update()
  })
  Mousetrap.bind("down", function() {
    that.game.board.topToBottom()
    that.game.board.pushThisWay()
    that.game.board.topToBottom()
    that.update()
  })
}


