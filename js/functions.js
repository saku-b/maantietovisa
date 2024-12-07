//visa1
function checkAnswer(choice) {
    const feedback = choice === 'Ranska' ? "Oikein =)" : "Yritä uudelleen";
    document.getElementById('feedback').innerText = feedback;
  }

   
//visa2
// Globaalit muuttujat
let currentHintIndex = 0;
const hints = [
  "../img/1.jpg", 
  "../img/2.jpg", 
  "../img/3.jpg",
  "../img/4.jpg", 
  "../img/5.jpg",
];

// Näyttää seuraavan vihjeen kuvan
function roll() {
  currentHintIndex++;
  if (currentHintIndex >= hints.length) {
    currentHintIndex = 0; // Palaa ensimmäiseen vihjeeseen
  }
  document.querySelector("#finland img").src = hints[currentHintIndex];
}

// Tarkistaa vastauksen
function giveAnswer() {
  const userAnswer = document.getElementById("question").value.trim().toLowerCase();
  const correctAnswer = "suomi"; 
  
  if (userAnswer === correctAnswer) {
    document.getElementById("answer").textContent = "Jee, Tiesit oikein :)";
    document.getElementById("answer").style.color = "green";
  } else {
    document.getElementById("answer").textContent = "Saitko jo joulupukki vihjeen? Yritähän uudelleen";
    document.getElementById("answer").style.color = "red";
  }
}

const landmarks = {
  "Eiffel-torni": {
    question: "Missä Eiffel-torni sijaitsee?",
    options: ["Ranska", "Italia", "USA"],
    correct: "Ranska",
  },
  "Machu Picchu": {
    question: "Missä Machu Picchu sijaitsee?",
    options: ["Peru", "Meksiko", "Brasilia"],
    correct: "Peru",
  },
  "Sydney Opera House": {
    question: "Missä Sydney Opera House sijaitsee?",
    options: ["Australia", "Uusi-Seelanti", "Kanada"],
    correct: "Australia",
  },
};

function showLandmarkInfo(landmark) {
  const landmarkInfo = landmarks[landmark];
  document.getElementById("landmark-question").textContent =
    landmarkInfo.question;

  document.getElementById("option1").textContent = landmarkInfo.options[0];
  document.getElementById("option2").textContent = landmarkInfo.options[1];
  document.getElementById("option3").textContent = landmarkInfo.options[2];

  // Tallenna oikea vastaus tarkistusta varten
  document.getElementById("question-container").dataset.correct =
    landmarkInfo.correct;
}

function checkAnswer(option) {
  const selectedAnswer = document.getElementById(option).textContent;
  const correctAnswer = document.getElementById("question-container").dataset
    .correct;

  if (selectedAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Oikein!";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").textContent = "Väärin. Yritä uudelleen!";
    document.getElementById("feedback").style.color = "red";
  }
}
