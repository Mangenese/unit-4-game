//intialize the game
// when game starts computer generates a rnd num from 19-120
// when player clicks on the image button it adds total to their total 
// once players total equals the rnd num they win 
// if player goes over the rnd total they lose
// game needs to restart once a player wins or loses
// on a new game random the buttons

//setting global variables
var win = 0;
var loss = 0;

// random number generator for the computer guess

var minCompNum = 19;
var maxCompNum = 120;

var randomNumber = randomNumberFromRange(minCompNum, maxCompNum);

function randomNumberFromRange(min,max)
{ return Math.floor(Math.random()*(max-min+1)+min);
}
    winRndNum.text(randomNumber);
console.log(randomNumber);