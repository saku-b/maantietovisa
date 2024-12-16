const questions = [
  {
      question: "Mikä muuri näkyy avaruuteen?",
      options: ["Ranskan", "Kiinan", "Kanadan"],
      correct: 1,
      image: "../img/kiina.jpg"
  },
  {
      question: "Missä sijaitsee vapaudenpatsas?",
      options: ["Suomessa", "Yhdysvalloissa", "Kanadassa"],
      correct: 1,
      image: "../img/vapaus.jpg"
  },
  {
      question: "Mihin alla olevista vaihtoehdoista lähtisit laskettelemaan?(Joka on tunnettu myös suklaasta ja kelloista ",
      options: ["Afrikkaan", "Brasiliaan", "Itävallan Alpeille"],
      correct: 2,
      image: "../img/alpit.jpg"
  },
  {
      question: "Missä maassa on Disneyn elokuvasta tuttu Notre-Dame?",
      options: ["Puolassa", "Ranskassa", "Kanadassa"],
      correct: 1,
      image: "../img/notre.jpg"
  },
  {
      question: "Mikä maa on tunnettu antiikista ja mytologiasta?",
      options: ["Kreikka", "Portugali", "Kanada"],
      correct: 0,
      image: "../img/kreikka.jpg"
  },
  {
      question: "Missä Machu Picchu sijaitsee?",
      options: ["Suomessa", "Perussa", "Italiassa"],
      correct: 1,
      image: "../img/Machu Picchu.jpg"
  },
  {
      question: "Mikä torni sijaitsee Italiassa?",
      options: ["Pyynikin näkötorni", "Pisan kalteva torni", "Canton Tower"],
      correct: 1,
      image: "../img/pisa.jpg"
  },
  {
      question: "Missä maassa sijaitsee pyramidit?",
      options: ["Suomessa", "Australiassa", "Egyptissä"],
      correct: 2,
      image: "../img/pyramids-2371501_1280.jpg"
  },
  {
      question: "Missä voit törmätä Joulupukkiin ja nähdä revontulia?",
      options: ["Suomessa", "Bulgariassa", "Sloveniassa"],
      correct: 0,
      image: "../img/1.jpg"
  },
  {
      question: "Mikä on Burj Khalifa?",
      options: ["Oululaisten perinneruoka", "Maailman korkein rakennus Dubaissa", "Kanadan pilvenpiirtäjä"],
      correct: 1,
      image: "../img/burk.jpg"
  },
 
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;

  const optionButtons = document.querySelectorAll(".option");
  currentQuestion.options.forEach((option, index) => {
      optionButtons[index].textContent = option;
  });

  // Tyhjennetään palaute ja kuva
  document.getElementById("feedback").textContent = "";
  document.getElementById("image").style.display = "none";
  document.getElementById("nahtavyydet").textContent = `Pisteet: ${score}`;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (selectedIndex === currentQuestion.correct) {
      feedback.textContent = "Oikein meni :)";
      feedback.style.color = "green";
      score++;

      // Näytetään kuva oikeasta vastauksesta
      document.getElementById("image").src = currentQuestion.image;
      document.getElementById("image").style.display = "block";

      // Siirrytään seuraavaan kysymykseen
      setTimeout(() => {
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
              loadQuestion();
          } else {
              feedback.textContent = "Peli loppui. Mene katsomaan kokonaispisteesi yhteispisteet-sivulta.";
              sessionStorage.setItem("nahtavyydet", score); // Tallennetaan pisteet sessionStorageen
              alert("Peli päättyi.");
          }
      }, 2500);
  } else {
      feedback.textContent = "Yritähän uudelleen";
      feedback.style.color = "red";
  }
}

// Lataa ensimmäinen kysymys sivun latautuessa
window.onload = loadQuestion;