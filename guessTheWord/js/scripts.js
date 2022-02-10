// Список слов
let wordList = [
  'собака', 'пианино', 'телевизор', 'тетрадь'
];

let btnStart = document.querySelector('#btnStart'),
    timer = null,
    secondsLeft = 0,
    strTimer = document.querySelector('#strTimer'),
    strWord = document.querySelector('#strWord'),
    currentWord = '',
    textResult = document.querySelector('#textResult'),
    left = document.querySelector('#left'),
    ttl = 3,
    strLose = document.querySelector('#strLose'),
    strWin = document.querySelector('#strWin'),
    numWin = 0,
    numLose = 0;

// Перемешивание массива слов
Array.prototype.shuffle = function (){
   return this.map(i=>[Math.random(), i]).sort().map(i=>i[1]);
};

// Выводим новое слово
function getNewWord() {
  if (wordList.length == 0) {
    left.innerHTML = 'Конец игры';
    strWord.innerHTML = '';
    textResult.value = '';
    return;
  }
  secondsLeft = ttl;
  strTimer.innerHTML = secondsLeft;
  wordList.shuffle();
  currentWord = wordList.shift();
  strWord.innerHTML = currentWord.split('').shuffle().join('');
  textResult.focus();
  textResult.value = '';
  btnStart.disabled = 'disabled';
  timer = setInterval(getTime, 1000);

  console.log(currentWord)
  console.log(wordList)
}

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

// Провека вводимого слова
function checkInput() {
  if (textResult.value == currentWord) {
    numWin++;
    strWin.innerHTML = numWin;
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
 