/*
Planning: 
- Each crystal needs to have a number between 1-12 randomly allocated to it
- The target score needs to have a number between 19-120 randomly allocated to it
- We need to print the target score onto the page
- When each gem is clicked, it's number should be recorded
- When each gem is clicked, its number should be added into the total score
- The total score needs to keep adding up
- We need to record the number of wins
- We need to record the number of losses
- We need to reset the game back to 0 once it goes over the target score
*/

// - Each crystal needs to have a number between 1-12 randomly allocated to it
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var totalScore;

// - The target score needs to have a number between 19-120 randomly allocated to it
var targetScore = Math.floor(Math.random() * 120) + 19;
console.log(targetScore);
function startGame() {
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

// - We need to print the target score onto the page
    document.getElementById("targetScore").innerHTML = targetScore;

// - When each gem is clicked, it's number should be recorded



}
startGame();





