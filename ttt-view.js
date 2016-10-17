

class View {
  constructor(game, $el) {
    this.game = game;
    this.board = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {

    this.board.on("click", "li", event => {

      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      $currentTarget.addClass("clicked");
      // if statement for player marks, place proper player marks
      this.makeMove($currentTarget);

    });


  }

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
      $square.append(currentPlayer);
      let row = $square.data("x");
      let column = $square.data("y");
      this.game.playMove([row,column]);

      if (this.game.winner()) {
        $("h2").append(`${currentPlayer} has won`);
        $("h2").removeClass("hidden");
      }
  }

  setupBoard() {
    // 3 unordered lists
    for (let j = 0; j<3; j++) {
      let $ul = $("<ul></ul>");
      for (let i = 0; i < 3 ; i++) {
        let $li = $("<li></li>");
        $li.data({"x": j, "y": i})
        $ul.append($li);
      }
      $(this.board).append($ul);
    }
  }


}

module.exports = View;
