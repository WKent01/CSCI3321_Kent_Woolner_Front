var gameOver = false;
var totalMove = 0;
var currentPlayer = 'X';


function placeMarker(spotID){
    if(!gameOver){

    }
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
}

function currentPlayerWon(){
    //get each spot using getElementById()
    //for example, s1 = document.getElementById('1')'
    //if
    //(s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML) <= first row
    //  || (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML) <= second row
    //...
    //  gameOver = true;
    //else
    //  gameOver = false;
    //
    //if(!gameOver)
    //  if(totalMove == 8) <== maybe 9
    //      gameOver = true;
    //return gameOver
}
