const checkForSequence = (option1, option2, option3) => {
    return option1 === option2 && option2 === option3;
  }
  
  export const checkForWinner = (board) => {
    // ROWS
    for (let i = 0; i < 9; i += 3) {
      if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
        console.log("ROW WINNER");
        return true;
      }
    }

    //COLUMNS
    for (let i=0; i<3; i+=1) {
        if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
          console.log("COLUMN WINNER");
          return true;
        }
      }


  
    // Diagonal 1
    if (board[0] === board[4] && board[4] === board[8]) {
      console.log("Diagonal winner");
      return true;
    }
  
    // Diagonal 2
    if (board[2] === board[4] && board[4] === board[6]) {
      console.log("Diagonal winner");
      return true;
    }
  
    return false; 
  }
  
