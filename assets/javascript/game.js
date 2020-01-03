//intialize the game
// when game starts computer generates a rnd num from 19-120
// when player clicks on the image button it adds total to their total 
// once players total equals the rnd num they win 
// if player goes over the rnd total they lose
// game needs to restart once a player wins or loses
// on a new game random the buttons

//setting global variables
var wins = 0;
var losses = 0;
var blueNum = 0;
var redNum = 0;
var greenNum = 0;
var yellowNum = 0;
var randomNum = 0;
var total = 0;
// random number generator for the computer guess

function randomNumGen() {
    total = 0;

    $("#total").text(total);
    //The random number gets generated for the user to match
    randomNum = Math.floor(Math.random() * 102) + 19;

    //generate a random number for the rupees
    blueNum = Math.floor(Math.random() * 12) + 1;
    greenNum = Math.floor(Math.random() * 12) + 1 ;
    redNum = Math.floor(Math.random() * 12) + 1;
    yellowNum = Math.floor(Math.random() * 12) + 1; 
    console.log(blueNum, greenNum, redNum, yellowNum);


    $("#rndNum").text(randomNum);

}

randomNumGen();


// To start the game the game needs to display the random number
// If the total === randomNum then you win
// If the total > randomNum you lose!

$(".blue").on("click", function () {

    if(total === randomNum){
        wins++;
        $("#win").text(wins);
        randomNumGen();
    } if(total > randomNum) {
        losses++;
        $("#losses").text(losses);
        randomNumGen();

    } 
    else {total = total + blueNum;
    $("#total").text(total); }
});

$(".green").on("click", function() {
    if (total === randomNum){
        wins++;
        $("#win").text(wins);
        randomNumGen()
    } else  if (total > randomNum){
        losses++;
        $("#losses").text(losses);
        randomNumGen();
    } else {
        total = total + greenNum;
        $("#total").text(total); 
    }
});

$(".red").on("click", function() {
    if (total === randomNum){
        wins++;
        $("#win").text(wins);
        randomNumGen()
    } else  if (total > randomNum){
        losses++;
        $("#losses").text(losses);
        randomNumGen();
    } else {
        total = total + redNum;
        $("#total").text(total); 
    }
});

$(".yellow").on("click", function() {
    if (total === randomNum){
        wins++;
        $("#win").text(wins);
        randomNumGen()
    } else  if (total > randomNum){
        losses++;
        $("#losses").text(losses);
        randomNumGen();
    } else {
        total = total + yellowNum;
        $("#total").text(total); 
    }
});