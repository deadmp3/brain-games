import run from '../engine';

const getGCD = (a, b) => {
  if (!(a && b)) {
    return a + b;
  }
  if (a > b) {
    return getGCD(a % b, b);
  }
  return getGCD(a, b % a);
};

const getRound = () => {
  const rndNum1 = Math.floor(Math.random() * 100);
  const rndNum2 = Math.floor(Math.random() * 100);
  return {
    question: `${rndNum1} ${rndNum2}`,
    correctAnswer: getGCD(rndNum1, rndNum2).toString(),
  };
};

export default () => run({
  description: 'Answer "yes" if number even otherwise answer "no".',
  getRound,
});
