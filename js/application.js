$(document).ready(function() {
  game = new Game();
  update(game);
});


function update(gameObject){
  for (var y in gameObject.board.stuff){
    for (var x in gameObject.board.stuff[y]){
      var row = $('tbody').children()[y]
      var $box = $(row.children[x])
      $box.addClass(gameObject.board.stuff[y][x])
      $box.text(gameObject.board.stuff[y][x])
    }
  }
}
