const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const submit = document.querySelector(".btn");
const count = document.querySelector(".score");
const input = document.querySelector("#input");

let score = 0;
let answer;

function randomNumber() {
    input.value = null;
    let rand1 = Math.floor(Math.random() * 100);
    let rand2 = Math.floor(Math.random() * 100);
     answer = rand1 + rand2;
    value1.textContent = rand1;
    value2.textContent = rand2;
  }
  
  function checkAnswer() {
    let userAnswer = parseInt(input.value, 10);
    if ( userAnswer === answer) {
        score++;
        showScore(score);
        confetti({
            particleCount: 100, // for style after the correct answer
            spread: 70,
            origin: { y: 0.6 },
        });
        randomNumber();
    } else {
      score--;
      if (score < 0) {
        score = 0;
      }
      showScore(score);
    }
  }
  
  function showScore(score) {
    count.textContent = score;
  }
  
  randomNumber();
  submit.addEventListener("click" , checkAnswer);