const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.addCommand('w', "Move the cursor up", this.cursor.up.bind(this.cursor))
    Screen.addCommand('s', "Move the cursor down", this.cursor.down.bind(this.cursor))
    Screen.addCommand('d', "Move the cursor right", this.cursor.right.bind(this.cursor))
    Screen.addCommand('a', "Move the cursor left", this.cursor.left.bind(this.cursor))
    Screen.addCommand('space', "Play move", this.turn.bind(this))

    Screen.render();
  }

  turn() {
    if (Screen.grid[this.cursor.row][this.cursor.col] === " ") {
      Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
    }

    let winCheck = TTT.checkWin(this.grid)
    console.log(winCheck)

    if ((winCheck === "X") || (winCheck === "O") || (winCheck === "T")) {
      console.log("win")
      TTT.endGame(winCheck);
    }



    if (this.playerTurn === "O") {
      this.playerTurn = "X";
    } else {
      this.playerTurn = "O";
    }
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static checkWin(grid) {
    let totalCount = 0
    // Checks diagonally
    //   let gridLength = grid.length - 1
    //     // right to left
    //     for(let j = 0; j < grid.length; j++){
    //       let countX = 0
    //       let countO = 0;
    //       let rightToLeft = grid[j][j]

    //       if(rightToLeft === 'X'){
    //         countX++
    //       }
    //       if(rightToLeft === 'O'){
    //         countO++
    //       }

    //     // Checks wins at j = 2
    //     if(countO == 3 ){
    //       return 'O'
    //     }
    //     if(countX == 3){
    //       return 'X'
    //     }
    //   }

    //   // left to right
    //   for(let j = 0; j < grid.length; j++){
    //     let countX = 0;
    //     let countO = 0;
    //     let leftToRight = grid[j][gridLength - j]

    //     if(leftToRight === 'X'){
    //       countX++

    //     }
    //     if(leftToRight === 'O'){
    //       countO++
    //     }

    //   // Checks wins at j = 2
    //   if(countO == 3 ){
    //     return 'O'
    //   }
    //   if(countX == 3){
    //     return 'X'
    //   }
    // }

    // Took this block of code below from HGerdes on github
        if (grid[1][1] !== " " &&
        ((grid[0][0] === grid[1][1] &&
        grid[0][0] === grid[2][2]) ||
        (grid[2][0] === grid[0][2] &&
        grid[1][1] === grid[0][2]))) {
          return grid[1][1];
        }
    //


    // Checking horizontal, also check if all the squares are filled with either X or O
      for(let i = 0; i < grid.length; i++){
        let row = grid[i]
        let countX = 0
        let countO = 0;

        for(let j = 0; j < row.length; j++){
          let value = row[j]
          if(value === 'X'){
            countX++
            totalCount++
          }
          if(value === 'O'){
            countO++
            totalCount++
          }
        }

        // Checks wins
        if(countO == 3){
          return 'O'
        }
        if(countX == 3){
          return 'X'
        }
      }

      // Checks vertically
      for(let i = 0; i < grid.length; i++){
        let col =  grid[i]
        let countX = 0
        let countO = 0;
        for(let j = 0; j < col.length; j++){
          let value = grid[j][i]
          if(value === 'X'){
            countX++
          }
          if(value === 'O'){
            countO++
          }
        }
        // Checks wins at j = 2
        if(countO == 3){
          return 'O'
        }
        if(countX == 3){
          return 'X'
        }
      }


    // check if the game is not finished
    for(let i = 0; i < grid.length; i++){
      let row = grid[i]
      for(let j = 0; j < row.length; j++){
        if(row[j] === ' '){
          return false
        }
      }
    }

      // Checks ties if total count is equal to the total squares in the grid
      if(totalCount === grid.length **2){
        return 'T'
      }
    }

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended


  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
