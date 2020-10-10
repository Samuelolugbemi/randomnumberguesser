let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
function generateTarget(){
    return Math.floor(Math.random() * 10);
}
function compareGuesses(currentHumanGuess, computerGuess, target){
    if(currentHumanGuess < 0 || currentHumanGuess > 9){
        alert("Out of Rounds")
    } else{
    target = generateTarget();
    currentHumanGuess; 
    computerGuess;
    closestTester1 = Math.abs(currentHumanGuess - target);
    closestTester2 = Math.abs(computerGuess - target);
    if(closestTester1 > closestTester2){
        return false;
    }
    else if(closestTester1 == closestTester2){
        return true;
    }
    else if(closestTester2 > closestTester1){
        return true;
    }   
}
}
function updateScore(winner){
    if(compareGuesses == true){
        humanScore++
        winner = "human";
    } else{
        computerScore++
        winner = "computer";
    }
}
function advanceRound(){
    currentRoundNumber++;
}