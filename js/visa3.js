const landmarks = {
    "Ateena": {
      question: "Missä maassa on paljon antiikkia?",
      options: ["Kreikka", "Ruotsi", "Kanada"],
      correct: "Kreikka",
      image: "../kuvat/greece-1776244_1280.jpg"
    },
    "Machu Picchu": {
      question: "Missä Machu Picchu sijaitsee?",
      options: ["Peru", "Suomi", "Kanada"],
      correct: "Peru",
      image: "../kuvat/Machu Picchu.jpg",
    },
    "Pyramidit": {
      question: "Missä maassa on pyramidit?",
      options: ["Egypti", "Islanti", "Kanada"],
      correct: "Egypti",
      image: "../kuvat/pyramids-2371501_1280.jpg",
    },
  };
  
  function showLandmarkInfo(landmark) {
    const landmarkInfo = landmarks[landmark];
    document.getElementById("landmark-question").textContent = landmarkInfo.question;
  
    document.getElementById("option1").textContent = landmarkInfo.options[0];
    document.getElementById("option2").textContent = landmarkInfo.options[1];
    document.getElementById("option3").textContent = landmarkInfo.options[2];
  
    document.getElementById("question-container").dataset.correct = landmarkInfo.correct;
    document.getElementById("question-container").dataset.image = landmarkInfo.image;
  }
  
  function checkAnswer(option) {
    const selectedAnswer = document.getElementById(option).textContent;
    const correctAnswer = document.getElementById("question-container").dataset.correct;
    const imageSrc = document.getElementById("question-container").dataset.image;
  
    if (selectedAnswer === correctAnswer) {
      document.getElementById("feedback").textContent = "Jee, tiesit jälleen :)";
      document.getElementById("feedback").style.color = "green";
  
      // Näytä oikea kuva
      const imageElement = document.getElementById("landmark-image");
      imageElement.src = imageSrc;
      imageElement.style.display = "block"; // Varmista, että kuva tulee näkyviin
    } else {
      document.getElementById("feedback").textContent = "Kokeilehan uudelleen";
      document.getElementById("feedback").style.color = "red";
    }
  }
  
  