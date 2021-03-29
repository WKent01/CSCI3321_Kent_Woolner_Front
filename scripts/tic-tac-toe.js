var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';
const positions = {}
positions["one"] = 1;
positions[1] = "one";
positions[positions[2] = "two"] = "2"
positions[positions[3] = "three"] = "3"
positions[positions[4] = "four"] = "4"
positions[positions[5] = "five"] = "5"
positions[positions[6] = "six"] = "6"
positions[positions[7] = "seven"] = "7"
positions[positions[8] = "eight"] = "8"
positions[positions[9] = "nine"] = "9"


function placeMarker(tile){
    // get the spot by spotId
    var currentTile = document.getElementById(positions[tile]);

    //get the spot/element by spotID
    //if the spot is empty
        //place the marker by changing the innerHTML of the spot
        //depending on who is the current player 
        //check if the current player has won the game by calling currentPlayerWon()
        //if yes, display message
        //if no, switch player, then call placeMarker again
    //else
        //do nothing
    //else (the game is over)
        //do nothing

    if(gameOver){
        updateGameStatus();
    }else{
        //console.log(currentTile.innerHTML.length)
        if(currentTile.innerHTML.length === 1){
            return;
        }else{
            currentTile.innerHTML = currentPlayer;
            totalMove++;
            checkColumns();
            checkRows();
            checkDiagonals();
            if(gameOver){
                updateGameStatus();
            }else{
                if(currentPlayer === 'X'){
                    currentPlayer = 'O';
                }else{
                    currentPlayer = 'X';
                }
                updateGameStatus();
            }
        }
    }

    
}

function currentPlayerWon(){

    return gameOver;
}

function checkRows(){
    for(var i = 0; i < 3; i++){
        t1 = document.getElementById(positions[1+3*i]);
        t2 = document.getElementById(positions[2+3*i]);
        t3 = document.getElementById(positions[3+3*i]);

        if(t1.innerHTML.length > 0 && t2.innerHTML.length > 0 && t3.innerHTML.length > 0){
            if(t1.innerHTML === t2.innerHTML && t2.innerHTML === t3.innerHTML){
                gameOver = true;
            }
        }
    }
}

function checkColumns(){
    for(var i = 0; i < 3; i++){
        t1 = document.getElementById(positions[1+i]);
        t2 = document.getElementById(positions[4+i]);
        t3 = document.getElementById(positions[7+i]);

        if(t1.innerHTML.length > 0 && t2.innerHTML.length > 0 && t3.innerHTML.length > 0){
            if(t1.innerHTML === t2.innerHTML && t2.innerHTML === t3.innerHTML){
                gameOver = true;
            }
        }
    }
}

function checkDiagonals(){
    t1 = document.getElementById(positions[1]);
    t3 = document.getElementById(positions[3]);
    t5 = document.getElementById(positions[5]);
    t7 = document.getElementById(positions[7]);
    t9 = document.getElementById(positions[9]);

    if(t1.innerHTML.length > 0 && t5.innerHTML.length > 0 && t9.innerHTML.length > 0){
        if(t1.innerHTML === t5.innerHTML && t5.innerHTML === t9.innerHTML){
            gameOver = true;
        }
    }

    if(t3.innerHTML.length > 0 && t5.innerHTML.length > 0 && t7.innerHTML.length > 0){
        if(t3.innerHTML === t5.innerHTML && t5.innerHTML === t7.innerHTML){
            gameOver = true;
        }
    }

}

function updateGameStatus(){
    var gameStatus = document.getElementById('display');
    //if (gameOver){
    //  if it is not a tie, announce the winner
    // else, announce the winner
    //}else{
    //  if not a tie ask for a move
    // display the message
    //}

    /*
    if(gameOver){
        if(totalMove == 9){
            gameStatus.innerHTML = "The game resulted in a tie.";
        }else{
            gameStatus.innerHTML = "Player " + currentPlayer + " won.";
        }
    }else{
        gameStatus.innerHTML = "Its Player " + currentPlayer + "'s turn.";
    }
    */

    if(totalMove <= 3){
        gameStatus.innerHTML = "Its Player " + currentPlayer + "'s turn.";
    }else{
        if(currentPlayerWon()){
            gameStatus.innerHTML = "Player " + currentPlayer + " won.";
        }else if(totalMove === 9 && !currentPlayerWon()){
            gameStatus.innerHTML = "The game resulted in a tie.";
        }else{
            gameStatus.innerHTML = "Its Player " + currentPlayer + "'s turn.";
        }
    }
}
