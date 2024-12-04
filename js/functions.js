let correctAnswerCount = 0
let incorrectAnswerCount = 0




function checkAnswer(choice) {
    const feedback = choice === 'Ranska' ? "Oikein =)" : "Yritä uudelleen";
    document.getElementById('feedback').innerText = feedback;
  }

  const answers = [
    "Kyllä!",
    "Ei.",
    "Ehkä.",
    "Todennäköisesti.",
    "Ehdottomasti ei.",
    "Se riippuu tilanteesta.",
    "En ole varma.",
    "Kysypä uudelleen myöhemmin.",
    "Luultavasti kyllä.",
    "Ei ole mitään mahdollisuutta."
];
  document.getElementById("finland").addEventListener("click", roll);

function roll() {
    // Satunnaisluku välillä 1-5
    const numero = Math.floor(Math.random() * 5) + 1;

    // Haetaan noppa-elementti
    const diceElement = document.getElementById("finland");

    // Päivitetään noppa-elementin sisältö kuvalla
    diceElement.innerHTML = `<img src="../img/${numero}.jpg" />`;

}
