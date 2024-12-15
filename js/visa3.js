const landmarks = {
    "Ateena": {
      question: "Missä maassa on paljon antiikkia?",
      options: ["Kreikka", "Ruotsi", "Kanada"],
      correct: "Kreikka",
      image: "../img/greece-1776244_1280.jpg"
    },
    "Machu Picchu": {
      question: "Missä Machu Picchu sijaitsee?",
      options: ["Peru", "Suomi", "Kanada"],
      correct: "Peru",
      image: "../img/Machu Picchu.jpg",
    },
    "Pyramidit": {
      question: "Missä maassa on pyramidit?",
      options: ["Egypti", "Islanti", "Kanada"],
      correct: "Egypti",
      image: "../img/pyramids-2371501_1280.jpg",
    },
  };
  
  function showLandmarkInfo(landmark) {
    const landmarkInfo = landmarks[landmark];
    document.getElementById("landmark-question").textContent = landmarkInfo.question;
  
    document.getElementById("option1").textContent = landmarkInfo.options[0];
    document.getElementById("option2").textContent = landmarkInfo.options[1];
    document.getElementById("option3").textContent = landmarkInfo.options[2];

    if (landmark === "Ateena" || landmark === "Machu Picchu" || landmark === "Pyramidit") {
      const imageElement = document.getElementById("landmark-image");
      imageElement.src = landmarkInfo.image;
      imageElement.style.display = "block";
      imageElement.classList.add("landmark-image");  // Lisää luokka ensimmäisiin kuviin
    }
  
  
    document.getElementById("question3-container").dataset.correct = landmarkInfo.correct;
    document.getElementById("question3-container").dataset.image = landmarkInfo.image;
  }
  
  function checkAnswer(option) {
    const selectedAnswer = document.getElementById(option).textContent;
    const correctAnswer = document.getElementById("question3-container").dataset.correct;
    const imageSrc = document.getElementById("question3-container").dataset.image;
  
    if (selectedAnswer === correctAnswer) {
      document.getElementById("feedback3").textContent = "Jee, tiesit jälleen :)";
      document.getElementById("feedback3").style.color = "green";
  
      
      const imageElement = document.getElementById("landmark-image");
      imageElement.src = imageSrc;
      imageElement.style.display = "block";
    } else {
      document.getElementById("feedback3").textContent = "Kokeilehan uudelleen";
      document.getElementById("feedback3").style.color = "red";
    }
  }
  
  