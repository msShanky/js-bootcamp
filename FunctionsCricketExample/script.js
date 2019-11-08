let score = 0;
function addScore(value) {
	console.log('Value Received => ', value);
	score += value;
	document.getElementById('score').innerHTML = score;
}
