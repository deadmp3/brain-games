import readlineSync from 'readline-sync';

const game = (roundsLeft) => {
  if (!roundsLeft) {
    return true;
  }
  const rndNum = Math.floor(Math.random() * 100);
  const correctAnswer = rndNum % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${rndNum}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    return false;
  }
  return game(roundsLeft - 1);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const username = readlineSync.question('May I have your name? ');
  console.log('');
  console.log(`Hello, ${username}!`);
  if (game(3)) {
    console.log(`Congratulations, ${username}!`);
  }
};
