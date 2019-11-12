let score = 0;
let wicket = 0;
let balls = 0;
let overs = 0;

function updateDOM(target, value) {
	document.getElementById(target).innerHTML = value;
}

function handleBalls() {
	balls++;
	updateDOM('balls', balls);
}

function updateOvers() {
	overs++;
	updateDOM('overs', overs);
}

function addScore(value) {
	score += value;
	if (balls >= 6) {
		updateOvers();
		balls = 0;
		updateDOM('balls', balls);
		return;
	}
	handleBalls();
	updateDOM('score', score);
	updateDOM('balls', balls);
	updateDOM('overs', overs);
}

function addWicket() {
	if (wicket >= 10) {
		alert('GAME OVER !!');
		return;
	}
	wicket = wicket + 1;
	updateDOM('wicket', wicket);
}

function calculateOvers() {
	updateDOM('overs', 1);
}
