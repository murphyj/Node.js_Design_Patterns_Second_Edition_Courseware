const stampit = require('stampit');

const piece = stampit()
  .props({
    name: 'Chess Piece',
    diagonal: true,
    vertical: true,
    horizontal: true,
    spaces: "*",
    char: 'P'
  }).methods({
  moves() {
    let string = '';

    let directions = [];
    if (this.diagonal) {
      directions.push('D');
    }
    if (this.horizontal) {
      directions.push('H');
    }
    if (this.vertical) {
      directions.push('V');
    }

    string = this.char + '[' + directions.join('|') + ']' + '[' + this.spaces + ']';
    console.log(string);
  }
});
//
// const mover = stampit()


const king = piece();
king.name = 'King';
king.diagonal = true;
king.vertical = true;
king.horizontal = true;
king.spaces = "1";
king.char = "K";

const queen = piece();
queen.name = 'Queen';
queen.diagonal = true;
queen.vertical = true;
queen.horizontal = true;
queen.spaces = "*";
queen.char = "Q";

const bishop = piece();
bishop.name = 'Bishop';
bishop.diagonal = true;
bishop.vertical = false;
bishop.horizontal = false;
bishop.spaces = "*";
bishop.char = "B";

const rook = piece();
rook.name = 'Rook';
rook.diagonal = false;
rook.vertical = true;
rook.horizontal = true;
rook.spaces = "*";
rook.char = "R";

king.moves();
queen.moves();
bishop.moves();
rook.moves();
