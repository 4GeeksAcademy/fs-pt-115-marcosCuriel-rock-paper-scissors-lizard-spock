const things = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rockPaperScissors = () => {

	let player = prompt('Choose: rock, paper, scissors, lizard o spock'.toLowerCase());

	let machine = Math.floor(Math.random() * things.length);

	console.log(`You Choose ${player}`);
	console.log(`Machine choose ${things[machine]}`);

	const winPlays = ['scissors-paper', 'rock-scissors', 'paper-rock', 'lizard-paper', 'lizard-spock', 'spock-scissors', 'spock-rock'];
	let play = player + '-' + machine;

	if (player === things[machine]) {
		console.log("It's a Draw!");
	} else if (winPlays.includes(play)) {
		console.log("You Win !!");
	} else {
		console.log('You lose!!');
}
}
rockPaperScissors()
