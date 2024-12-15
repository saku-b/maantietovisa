// Alustetaan pisteet (score)
let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;

// Päivittää pisteet näkyviin
function updateScore() {
    document.getElementById("score").textContent = `Pisteet: ${score}`;
}

// Visa 1: Tarkistaa vastauksen
function checkAnswerVisa1(choice) {
    const feedback = choice === 'Ranska' ? "Oikein =), Nuolta klikkaamalla pääset seuraavaan kysymykseen" : "Yritä uudelleen";
    document.getElementById('feedback').innerText = feedback;

    if (choice === 'Ranska') {
        score++;
        localStorage.setItem("score", score); // Tallennetaan pisteet
        updateScore();
    }
}

// Visa 2: Näyttää seuraavan vihjeen
let currentHintIndex = 0;
const hints = [
  "../img/1.jpg", 
  "../img/2.jpg", 
  "../img/3.jpeg",
  "../img/4.jpg", 
  "../img/5.jpg",
];

function roll() {
  currentHintIndex++;
  if (currentHintIndex >= hints.length) {
    currentHintIndex = 0; // Palaa ensimmäiseen vihjeeseen
  }
  document.querySelector("#finland img").src = hints[currentHintIndex];
}

// Visa 2: Tarkistaa vastauksen
function giveAnswer() {
  const userAnswer = document.getElementById("question").value.trim().toLowerCase();
  const correctAnswer = "suomi"; 
  
  if (userAnswer === correctAnswer) {
    document.getElementById("answer").textContent = "Jee, Tiesit oikein :)";
    document.getElementById("answer").style.color = "green";
    score++;
    localStorage.setItem("score", score); // Tallennetaan pisteet
    updateScore();
  } else {
    document.getElementById("answer").textContent = "Saitko jo joulupukki vihjeen? Yritähän uudelleen";
    document.getElementById("answer").style.color = "red";
  }
}

// Alustaa pisteet ja varmistaa, että kaikki on ladattu
window.onload = function () {
    updateScore(); // Näyttää pisteet
};


//visa3
const questions = [
  {
      question: "Mikä muuri näkyy avaruuteen?",
      options: ["Ranskan", "Kiinan", "Kanadan"],
      correct: 1
  },
  {
      question: "Missä sijaitsee vapaudenpatsas?",
      options: ["Suomessa", "Yhdysvalloissa", "Kanadassa"],
      correct: 1
  },
  {
      question: "Mihin alla olevista vaihtoehdoista lähtisit laskettelemaan? (Joka on tunnettu myös suklaasta, kelloista ja juustoista)",
      options: ["Afrikka", "Irlanti", "Sveitsi"],
      correct: 2
  },
  {
      question: "Missä maassa on Disneyn elokuvasta tuttu Notre-Dame?",
      options: ["Ranskassa", "Puolassa", "Kanadassa"],
      correct: 0
  },
  {
      question: "Mikä maa on tunnettu antiikista ja mytologioista?",
      options: ["Kreikka", "Norja", "Kanada"],
      correct: 0
  },
  {
      question: "Missä Machu Picchu sijaitsee?",
      options: ["Peru", "Italia", "Kanada"],
      correct: 0
  },
  {
      question: "Missä sijaitsee Pisan kalteva torni?",
      options: ["Espanja", "Italia", "Kanada"],
      correct: 1
  },
  {
      question: "Missä maassa sijaitsevat pyramidit?",
      options: ["Ruotsissa", "Kanadassa", "Egyptissä"],
      correct: 2
  }
];


let currentQuestionIndex = 0;


function loadQuestion() {
const currentQuestion = questions[currentQuestionIndex];
document.getElementById("question4").textContent = currentQuestion.question;

const optionButtons = document.querySelectorAll(".option-btn");
currentQuestion.options.forEach((option, index) => {
  optionButtons[index].textContent = option;
});

document.getElementById("feedback4").textContent = ""; // Tyhjennä palaute
document.getElementById("score").textContent = `Pisteet: ${score}`;
}

function checkAnswer(selectedIndex) {
const currentQuestion = questions[currentQuestionIndex];
const feedback = document.getElementById("feedback4");

if (selectedIndex === currentQuestion.correct) {
  feedback.textContent = "Oikein meni :)";
  feedback.style.color = "green";
  score++;

  // Siirry seuraavaan kysymykseen pienen viiveen jälkeen
  setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          loadQuestion();
      } else {
          feedback.textContent = "Olet suorittanut kaikki kysymykset!";
      }
  }, 1500);
} else {
  feedback.textContent = "Yritähän uudelleen";
  feedback.style.color = "red";
}
}

// Lataa ensimmäinen kysymys sivun latautuessa
window.onload = loadQuestion;