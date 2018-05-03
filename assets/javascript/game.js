/*
Planning: 
- Each crystal needs to have a number between 1-12 randomly allocated to it
- The target score needs to have a number between 19-120 randomly allocated to it
- We need to print the target score onto the page
- Assign each image with it's corresponding random value
- When each gem is clicked, it's number should be recorded
- When each gem is clicked, its number should be added into the total score
- The total score needs to keep adding up
- We need to record the number of wins
- We need to record the number of losses
- We need to reset the game back to 0 once it goes over the target score
*/

// GLOBAL VARIABLES
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var storeScore = [];
var crystalScore;
var targetScore;

// Game Counters
var winCounter = 0;
var lossCounter = 0;
var totalScore = 0;

// $("#total").innerHTML=totalScore;

 // - Each crystal needs to have a number between 1-12 randomly allocated to it
crystal1 = Math.floor(Math.random() * 12) + 1;
crystal2 = Math.floor(Math.random() * 12) + 1;
crystal3 = Math.floor(Math.random() * 12) + 1;
crystal4 = Math.floor(Math.random() * 12) + 1;
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);

// CALLING FUNCTIONS
startGame();
roundComplete();
// FUNCTION CODE

function startGame() {
    totalScore=0;
    document.getElementById("total").innerHTML = totalScore;
    // - The target score needs to have a number between 19-120 randomly allocated to it
    targetScore = Math.floor(Math.random() * 101) + 19;
    console.log(targetScore);
    // - We need to print the target score onto the page
    document.getElementById("targetScore").innerHTML = targetScore;

    // - ONCLICK FOR CRYSTAL IMAGES
    // Store HTML element in variable
    var crystalClick1 = document.getElementById("crystal1");
    // Add event listener
    crystalClick1.onclick = function () {
        console.log(crystal1);
        totalScore= totalScore + crystal1;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();
    }

    var crystalClick2 = document.getElementById("crystal2");
    crystalClick2.onclick = function () {
        console.log(crystal2);
        totalScore= totalScore + crystal2;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();
    }
    var crystalClick3 = document.getElementById("crystal3");
    crystalClick3.onclick = function () {
        console.log(crystal3);
        totalScore= totalScore + crystal3;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();

    }
    var crystalClick4 = document.getElementById("crystal4");
    crystalClick4.onclick = function () {
        console.log(crystal4);
        totalScore= totalScore + crystal4;
        document.getElementById("total").innerHTML=totalScore;
        roundComplete();
    }

    


}

function roundComplete() {

    // First, log an initial status update in the console
    // telling us how many wins, losses, and guesses are left.
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter);
    console.log("In Round complete");
    // HTML UPDATES
    // If the targetScore is equal to the totalScore (we are able to calculate the number right)
    console.log(targetScore);
    console.log(totalScore);
    if (targetScore === totalScore) {

        // Add to the win counter
        winCounter++;

        // Update the win counter in the HTML
        document.getElementById("win-counter").innerHTML = winCounter;

        // Restart the game
        startGame();
    }

    // If totalScore is greater than targetScore (You've lost the game!)
    else if (targetScore < totalScore) {

        // Add to the loss counter
        lossCounter++;

        // Update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = lossCounter;

        // Restart the game
        startGame();

    }

}





