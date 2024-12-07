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