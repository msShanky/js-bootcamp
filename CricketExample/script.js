let score = 0;
let wicket = 0;
let balls = 0;
let overs = 0;
const listOfBatsman = [];

// DOM Update
function updateDOM(target, value) {
  document.getElementById(target).innerHTML = value;
}

// DOM Create And Update
function createAndUpdateDom({ name, score, overs }, element = "p") {
  const newElement = document.createElement(element);
  newElement.innerHTML = `Name of the batsmen : ${name} Team Score : ${score} overs : ${overs}`;
  document.getElementById("scoreboard").appendChild(newElement);
}

// Handle Balls count and update DOM
function handleBalls() {
  balls++;
  updateDOM("balls", balls);
}
// Handle the over count and update DOM
function updateOvers() {
  overs++;
  updateDOM("overs", overs);
}
// Make sure the array is not empty when there is an update
function checkListIsNotEmpty() {
  if (listOfBatsman.length <= 0) {
    const newBatsmen = prompt("Please Enter a batsman name");
    listOfBatsman.push({ name: newBatsmen, score: 0, overs: 0 });
  }
}
// update overs when the balls reach 6
function validateBallUpdate() {
  if (balls >= 6) {
    updateOvers();
    balls = 0;
    updateDOM("balls", balls);
    return;
  }
}
// Adding score
function addScore(value) {
  checkListIsNotEmpty();
  score += value;
  listOfBatsman[wicket].score = score;
  validateBallUpdate();
  handleBalls();
  listOfBatsman[wicket].overs = `${overs}.${balls}`;
  updateDOM("score", score);
  updateDOM("balls", balls);
  updateDOM("overs", overs);
}

function updateBatsmen() {
  const latestValue = listOfBatsman[wicket - 1];
  console.log(latestValue, "The latest value is");
  createAndUpdateDom(latestValue);
}

function addWicket() {
  checkListIsNotEmpty();
  if (wicket >= 10) {
    alert("GAME OVER !!");
    return;
  }
  const nextBatsmen = prompt("Who is the next batsmen ? ");
  listOfBatsman.push({ name: nextBatsmen, score: 0, overs: "" });
  wicket = wicket + 1;
  updateDOM("wicket", wicket);
  updateBatsmen();
}

function calculateOvers() {
  updateDOM("overs", 1);
}
