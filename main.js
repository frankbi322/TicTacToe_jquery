const View = require ("./ttt-view");
const Game = require ("./game/game");

$( () => {
  // Your code here
  let view = new View (new Game, $(".ttt"));
});
