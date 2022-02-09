// Список слов
let wordList = [
  'собака', 'пианино', 'телевизор', 'тетрадь'
];

let btnStart = document.querySelector('#btnStart'),
    timer = null,
    secondsLeft = 0,
    strTimer = document.querySelector('#strTimer'),
    strWord = document.querySelector('#strWord'),
    currentWord = shuffle(wordList),
    textResult = document.querySelector('#textResult'),
    left = document.querySelector('#left'),
    ttl = 5,
    strLose = document.querySelector('#strLose'),
    numWin = 0,
    numLose = 0;
  


// Перемешивание массива слов
// Тасование Фишера — Йетса
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Выводим новое слово
function getNewWord() {
  if (!wordList.length) {
    left.innerHTML = 'Конец игры';
    strWord.innerHTML = '';
    textResult.value = '';
    
    return;
  }
  secondsLeft = ttl;
  strTimer.innerHTML = secondsLeft;
  let wordListShuffle = wordList.shift().split('');
  shuffle(wordListShuffle);
  strWord.innerHTML = wordListShuffle.join('');
  textResult.focus();
  textResult.value = '';
  btnStart.disabled = 'disabled';
  timer = setInterval(getTime, 1000);
}

// Провека вводимого слова
function checkInput() {}

// Остаток времени
function getTime() {
  secondsLeft--;
  strTimer.innerHTML = secondsLeft;
  if (secondsLeft == 0) {
    numLose++;
    strLose.innerHTML = numLose;
    clearInterval(timer);
    btnStart.disabled = '';
  }
}

// Глобальный запуск
window.onload = () => {
  textResult.addEventListener('keyup', checkInput);
  btnStart.addEventListener('click', getNewWord);
  strTimer.innerHTML = secondsLeft;
};
 