import readlineSync from 'readline-sync';
import * as games from './games';

const game = (nameGame, roundsLeft) => {
  if (!roundsLeft) {
    return true;
  }
  const data = games[nameGame]();
  console.log(`Question: ${data.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (data.correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${data.correctAnswer}'`);
    return false;
  }
  return game(nameGame, roundsLeft - 1);
};

export default (nameGame, mission) => {
  console.log('Welcome to the Brain Games!');
  console.log(mission);
  console.log('');
  const username = readlineSync.question('May I have your name? ');
  console.log('');
  console.log(`Hello, ${username}!`);
  if (game(nameGame, 3)) {
    console.log(`Congratulations, ${username}!`);
  }
};
