let hand = ["rock","paper","scissors"];
function getComputerHand(){
    return hand[parseInt(Math.random()*10) % 3];    //Math is a built-in object for every language including javascript and returns a psuedo-random number between 0-1 that's value is multipled by 10 and divided by 3 
   }                                                //that gives you a floating number between 0 and 3. The parseInt method forces it into an integer that gives you 0, 1 or 2.
function compare(choice1, choice2){ 
	console.log("Player1: " + choice1);
  console.log("Player2: " + choice2);
  
  if (choice1 == choice2){
		return "Tie!";
  }
  if (choice1 == "rock"){
		if (choice2 == "paper"){
    	return "Player2 Won!";
		}
    else{
    	return "Player1 Won!";
    }
  }
  else if (choice1 == "paper"){
  	if (choice2 == "scissors"){
    	return "Player2 Won!";
    }
    else{
    	return "Player1 Won!";
    }
  }
  else if (choice1 == "scissors"){
  	if (choice2 == "rock"){
    	return "Player2 Won!"
    }
    else{
    	return "Player1 Won!"
    }
  }
}

let choice1 = getComputerHand(); // computer's choice
let choice2 = hands[2]; // our choice
let game_result = compare(choice1, choice2); // get the result

console.log(game_result); // log the result
