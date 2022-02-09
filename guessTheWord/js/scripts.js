// Список слов
const wordList = [
  'собака', 'пианино', 'телевизор', 'тетрадь'
];

// Перемешивание массива слов
// Тасование Фишера — Йетса
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

console.log(wordList);
shuffle(wordList);
console.log(wordList);