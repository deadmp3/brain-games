import readlineSync from 'readline-sync';

const COUNTS_GAME = 3;

const run = (getRound, countsGame = COUNTS_GAME) => {
  if (!countsGame) {
    return true;
  }
  const { question, correctAnswer } = getRound();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    return false;
  }
  return run(getRound, countsGame - 1);
};

const isWin = result => result === COUNTS_GAME;

export default ({ description, getRound }) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const user = readlineSync.question('May I have your name? ');
  console.log('');
  console.log(`Hello, ${user}!`);
  const result = run(getRound);
  if (isWin(result)) {
    console.log(`Congratulations, ${user}!`);
  }
};
