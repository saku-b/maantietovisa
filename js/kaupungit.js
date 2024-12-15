let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answers");
let next = document.getElementById("next");
let optionButton = document.getElementById("optionButton");

let questionNumber = 0;
let score = 0;

 

//luodaan kysymykset

let questions = [
    {
        question: "Mikä on Tanskan pääkaupunki?",
        answers: [
            { text: "Kööpenhamina", correct: true},
            { text: "Tukholma", correct: false},
            { text: "Haukipudas", correct: false},
            { text: "Lontoo", correct: false}

        ]
    },
    {
        question: "Mikä on Norjan pääkaupunki?",
        answers: [
            { text: "Kempele", correct: false},
            { text: "Tukholma", correct: false},
            { text: "Kööpenhamina", correct: false},
            { text: "Oslo", correct: true}

        ]
    },
    {
        question: "Mikä on Ruotsin pääkaupunki?",
        answers: [
            { text: "Tukholma", correct: true},
            { text: "Oslo", correct: false},
            { text: "Helsinki", correct: false},
            { text: "Timbuktu", correct: false}

        ]
    },
    {
        question: "Mikä on Suomen pääkaupunki?",
        answers: [
            { text: "Varkaus", correct: false},
            { text: "Tallinna", correct: false},
            { text: "Helsinki", correct: true},
            { text: "Tukholma", correct: false}

        ]
    },
    {
        question: "Mikä on Viron pääkaupunki?",
        answers: [
            { text: "Tukholma", correct: false},
            { text: "Taivalkoski", correct: false},
            { text: "Helsinki", correct: false},
            { text: "Tallinna", correct: true}

        ]
    },
    {
        question: "Mikä on Venäjän pääkaupunki?",
        answers: [
            { text: "Tallinna", correct: false},
            { text: "Moskova", correct: true},
            { text: "Tukholma", correct: false},
            { text: "Juankoski", correct: false}

        ]
    },
    {
        question: "Mikä on Islannin pääkaupunki?",
        answers: [
            { text: "Kittilä", correct: false},
            { text: "Moskova", correct: false},
            { text: "Reykjavik", correct: true},
            { text: "Oslo", correct: false}

        ]
    },
    {
        question: "Mikä on Saksan pääkaupunki?",
        answers: [
            { text: "Berliini", correct: true},
            { text: "Kontula", correct: false},
            { text: "Helsinki", correct: false},
            { text: "Pariisi", correct: false}

        ]
    },
    {
        question: "Mikä on Ranskan pääkaupunki?",
        answers: [
            { text: "Amsterdam", correct: false},
            { text: "Berliini", correct: false},
            { text: "Pariisi", correct: true},
            { text: "Raahe", correct: false}

        ]
    },
    {
        question: "Mikä on Hollannin pääkaupunki?",
        answers: [
            { text: "Amsterdam", correct: true},
            { text: "Pudasjärvi", correct: false},
            { text: "Pariisi", correct: false},
            { text: "Tallinna", correct: false}

        ]
    },
]

//alkufunktio, jossa score on nolla
function start() {
    resetState();
    questionNumber = 0;
    score = 0;
    next.innerHTML = "Seuraava"; 
    showQuestion();
    document.getElementById('score').textContent = ""; 
}

//näytetään kysymys ja vastausvaihtoehdot
function showQuestion(){
    resetState();
    let currentQuestion = questions[questionNumber];
    let questionCounter = questionNumber + 1;

    questionElement.innerHTML = questionCounter + ". " +
    currentQuestion.question; 
    

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        button.dataset.correct = answer.correct; 
        button.addEventListener("click", selectAnswer); 
        answerButton.appendChild(button)
    });

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    // vastaus tulee näkymään oikean värisenä
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    }else{
        selectedButton.classList.add('incorrect');
    }

     // vastaukset disabloituvat kun on vastattu. 
     Array.from(answerButton.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
    });

    next.style.display = "block";

}

// pistemäärä kun kysymyksiin on vastattu
function scoreboard(){
    resetState();

    let message = "";
    // eri pistemääristä tulee eri palaute
    if (score === 10 ) {

        message = "Täydellistä!!!";

    } else if (score >= 7){

            message = "Hyvin tehty!";

    } else {
        
            message = "Nyt ollaan kyl treenin tarpeessa";
    }
    questionElement.innerHTML = "Sait pisteitä " + score + " / " + questions.length + "!! " + "<br>" + message;

    sessionStorage.setItem('kaupungit', score)

    next.innerHTML = "Pelaa uudestaan";
    next.style.display = "block";
    
    // uudelleen aloittamis funktio
    

    next.addEventListener("click", () => {
        questionNumber = 0; 
        start(); 
    }, { once: true }); 
}

//käydään läpi kysymykset, kun ne on käyty nii scoreboard tulee näkyviin

next.addEventListener("click", () => {
    questionNumber++;
    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        scoreboard();
        
    }
    
});


function resetState() {
   
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
    next.style.display = "none"; 
}

start();