function forLoopExample(printTimes) {
  for (let index = 0; index < printTimes; index++) {
    let pTag = document.createElement("p");
    pTag.innerHTML =
      " Index is  " + index + " Index Multiplied by 5 " + index * 5;
    document.getElementById("canvas").appendChild(pTag);
  }
}

const lotteryNumber = 69;

// Generates random 2 digit number
function generateRandomTwoDigits() {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log("Radom Number generated is", randomNumber);
  return randomNumber;
}

function whileLoopExample() {
  let isNumberMatch = true;

  // CREATE AND AN ELEMENT TO THE DOCUMENT
  const heading = document.createElement("h1");
  heading.innerHTML = "The Lottery Number is :" + lotteryNumber;
  document.getElementById("canvas").appendChild(heading);

  // CREATE AND ADD A NEW TAG FOR START TIME
  const startTime = document.createElement("p");
  startTime.innerHTML = new Date().toLocaleTimeString();
  document.getElementById("canvas").appendChild(startTime);

  // CREATE TRIES TAG AND UPDATE IT
  let tries = 0;
  const triesDisplay = document.createElement("p");
  triesDisplay.setAttribute("id", "tries");
  triesDisplay.innerHTML = tries;
  document.getElementById("canvas").appendChild(triesDisplay);

  while (isNumberMatch) {
    tries++;
    // console.log("Number of tries", tries, document.getElementById("tries"));
    document.getElementById("tries").innerHTML = tries;
    if (generateRandomTwoDigits() === lotteryNumber) {
      isNumberMatch = false;

      // GENERATE A NEW TAG FOR END TIME
      const endDate = document.createElement("p");
      endDate.innerHTML = new Date().toLocaleTimeString();
      document.getElementById("canvas").appendChild(endDate);

      const pTag = document.createElement("p");
      pTag.innerHTML = "Number Has been found";
      document.getElementById("canvas").appendChild(pTag);
    }
  }
}
