let players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];
//Find a player named 'Mike'
let foundplayer= players.find(function(football){
//the double equals == compares if the firstName is the same as 'Mike'
//single equals would compare it to the String which will return 
	return football.firstName == 'Mike';
}); //The function needs to be defined so after the argument (football)  
	//we use a curly brace { to define it and then close the player.find statement with ); after the last }
console.log(foundplayer);

//Get an array of all the players in the RB position
let rbPlayers= players.filter(function(tailback){
    return tailback.position.toLowerCase()== 'RB'.toLowerCase();
});
console.log(rbPlayers);

//Get an array of all the players last names
let Jerseynames = players.map(function(NamesFound){
    return NamesFound.lastName;
});
console.log(Jerseynames);

//Get an array of full names of all the running backs with more than 5 touchdowns
let rbFullnames = players.filter(function(ballers){
    return ballers.positions.toLowerCase() == 'RB'.toLowerCase() && ballers.touchdowns > 5;
});
let rbFullnamesFinal = rbFullnames.map(function(Fullname){
	return `${Fullname.firstName} ${Fullname.lastName}`;
});
console.log(rbFullnamesFinal);

//Get the number of touchdowns scored by Running backs
//rbPlayers is variable from earlier when we got Full Names of RBs
let Score = rbPlayers.reduce(function(sum, current){		//sum is the sumation, current is the callback
	return sum + current.touchdowns;
// ,0 is needed to intialized variable of sum
}, 0);
console.log(Score);


//Filtering the players array for 5+ touchdowns and what is return (from the filter function) is then being mapped over the players array elements by chaining, going   
//through each element and then a callback function that passes a variable to it (because of map method) and subsitutes it into the player array (the new callback function).
//example
//players.filter(function(){return something})
//something.map(function(){return newsomething});
console.log(players.filter(function(player){
	return player.touchdowns > 5 && player.position == 'RB';
}).map(function(player){
	return `${player.firstName} ${player.lastName}`;
}));
//or
//players.filter(function(){return something}).map(function(){return newSomething});
//something.map(function(){return somethingElse});

//Functionality for touchdowns by Running backs
console.log(players.filter(function(player){
	return player.position == 'RB';
}).reduce(function(total, player){
	return total + player.touchdowns;
},0));