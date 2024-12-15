document.addEventListener('DOMContentLoaded', function() {
  const countries = [
    { name: 'Itävalta', image: '../img/Austria.png' },
    { name: 'Ranska', image: '../img/France.png' },
    { name: 'Saksa', image: '../img/Germany.png' },
    { name: 'Kreikka', image: '../img/Greece.png'},
    { name: 'Italia', image: '../img/Italy.png'},
    { name: 'Puola', image: '../img/Poland.png'},
    { name: 'Portugali', image: '../img/Portugal.png'},
    { name: 'Romania', image: '../img/Romania.png'},
    { name: 'Espanja', image: '../img/Spain.png'},
    { name: 'Sveitsi', image: '../img/Switzerland.png'},
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(countries);

  let currentIndex = 0;
  let score = 0;
  const countryImage = document.getElementById('country-image');
  const guessForm = document.getElementById('guess-form');
  const guessInput = document.getElementById('guess-input');
  const resultMessage = document.getElementById('result-message');
  const pointElem = document.getElementById('points');

  function showNextCountry() {
    if (currentIndex >= countries.length) {
      currentIndex = 0;
      shuffle(countries);
    }
    const currentCountry = countries[currentIndex];
    countryImage.src = currentCountry.image;
    currentIndex++;
  }

  showNextCountry();

  guessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userGuess = guessInput.value.trim().toLowerCase();
    const currentCountry = countries[currentIndex - 1];
    if (userGuess === currentCountry.name.toLowerCase()) {
      resultMessage.textContent = 'Oikein! Hyvä arvaus!';
      resultMessage.classList.add('text-success');
      resultMessage.classList.remove('text-danger');
      score++;
      pointElem.textContent = 'Yhteispisteet: ' + score;
    } else {
      resultMessage.textContent = 'Väärin, yritä uudelleen.';
      resultMessage.classList.add('text-danger');
      resultMessage.classList.remove('text-success');
    }
    guessInput.value = '';
    showNextCountry();
  });
});
