alert(`👩🏻‍🚀 Wellcome to the Game | Turn on your Speakers 🔊
      and let's Play 🎮!`
      );
console.log('Wellcome to the Game! 💎 | 📜 | ✂️');

function userPlay(userScore, machineScore, rounds) {
  let userChoice = "";
  do {
    userChoice = prompt("💎 | 📜 | ✂️  User : " + userScore + " Machina : " + machineScore + " Round " + rounds);
    if (userChoice != null)
      userChoice = userChoice.toLocaleLowerCase();
    if (userChoice === "scissors")
      userChoice = "scissor";
  }
  while (userChoice === null || !(userChoice === "rock" || userChoice === "paper" || userChoice === "scissor"))
  return userChoice;
}

function computerPlay() {
  randomChoice = Math.floor(Math.random() * 3);
  switch (randomChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissor";
      break;
  }
}

function gameRounds(userChoice, machineChoice) {

  if (userChoice === machineChoice) {
    return 2;
  }
  else if (userChoice == "rock" && machineChoice == "paper") {
    return 1;
  }
  else if (userChoice == "rock" && machineChoice == "scissor") {
    return 0;
  }
  else if (userChoice == "paper" && machineChoice == "rock") {
    return 0;
  }
  else if (userChoice == "paper" && machineChoice == "scissor") {
    return 1;
  }
  else if (userChoice == "scissor" && machineChoice == "rock") {
    return 1;
  }
  else if (userChoice == "scissor" && machineChoice == "paper") {
    return 0;
  }
}

function gamePlay() {
  let userScore = 0;
  let machineScore = 0;
  let userChoice = "";
  let machineChoice = "";
  let totalRounds = 5;


  for (let i = 0; i < totalRounds; i++) {
    userChoice = userPlay(userScore, machineScore, i + 1);
    machineChoice = computerPlay();

    result = gameRounds(userChoice, machineChoice);

    let messageWinner;
    let messageLoser;
    let messageTieResult;
    let finalWinMessage;
    let finalLoseMessage;

    messageWinner = new SpeechSynthesisUtterance("You Win! " + userChoice + " Beats " + machineChoice);
    messageLoser = new SpeechSynthesisUtterance("You Lose! " + machineChoice + " Beats " + userChoice);
    messageTieResult = new SpeechSynthesisUtterance("Tie! " + machineChoice + " = " + userChoice);
    finalWinMessage = new SpeechSynthesisUtterance("You Win the Game!")
    finalLoseMessage = new SpeechSynthesisUtterance("You Lose the Game!")

    if (result == 0) {
      window.speechSynthesis.speak(messageWinner);
      console.log("You Win! " + userChoice + " Beats " + machineChoice);
      userScore++;
    }
    else if (result == 1) {
      window.speechSynthesis.speak(messageLoser);
      console.log("You Lose! " + machineChoice + " Beats " + userChoice);
      machineScore++;
    }
    else {
      window.speechSynthesis.speak(messageTieResult);
      console.log("Tie!" + machineChoice + " = " + userChoice);
    }


    console.log("User Score = " + userScore);
    console.log("Machina Score = " + machineScore);
    alert("🧔🏻 Score = " + userScore + " " + " | " + "💻 Score = " + machineScore)
  }

  if (userScore > machineScore) {
    console.log("You Win The Game! 😃");
    alert("You Win The Game! 😃");
    window.speechSynthesis.speak(finalWinMessage);
    
  }
  else if (userScore < machineScore) {
    console.log("You Lose The Game! 🤬");
    alert("You Lose The Game! 🤬");
    window.speechSynthesis.speak(finalLoseMessage)
    
  }
  else {
    alert("Tie! 🤷🏻‍♀️")
    console.log("Tie! 🤷🏻‍♀️")
    
  }
}

gamePlay()

