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
            { text: "Kööpenhamina", correct: false},
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
]

//alkufunktio, jossa score on nolla
function start(){
    questionNumber = 0;
    score = 0;
    showQuestion();

}

//näytetään kysymys ja vastausvaihtoehdot
function showQuestion(){
    let currentQuestion = questions[questionNumber];
    let questionCounter = questionNumber + 1;
    questionElement.innerHTML = questionCounter + ". " +
    currentQuestion.question; 
    
    answerButton.innerHTML = "";

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
    const correct = selectedButton.dataset.correct ==="true";
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    }else{
        selectedButton.classList.add('incorrect');
    }

}

next.addEventListener("click", () => {
    questionNumber++;
    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        next.innerHTML = "Restart";
        next.addEventListener("click", start);
    }

    document.getElementById('score').textContent =
    "Pisteitä " + score + "/" + questions.length + ". Oletpas körmy!"

});

start();