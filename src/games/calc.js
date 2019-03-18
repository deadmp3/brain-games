import run from '../engine';

const operators = [
  { sign: '+', action: (a, b) => a + b },
  { sign: '-', action: (a, b) => a - b },
  { sign: '*', action: (a, b) => a * b },
];

const getRound = () => {
  const rndNum1 = Math.floor(Math.random() * 100);
  const rndNum2 = Math.floor(Math.random() * 100);
  const operator = operators[Math.floor(Math.random() * 3)];
  return {
    question: `${rndNum1} ${operator.sign} ${rndNum2}`,
    correctAnswer: operator.action(rndNum1, rndNum2).toString(),
  };
};

export default () => run({
  description: 'What is the result of the expression?',
  getRound,
});
