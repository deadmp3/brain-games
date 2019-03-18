import run from '../engine';

const isEven = n => (n % 2 === 0 ? 'yes' : 'no');

const getRound = () => {
  const rndNum = Math.floor(Math.random() * 100);
  return {
    question: `${rndNum}`,
    correctAnswer: isEven(rndNum),
  };
};

export default () => run({
  description: 'Answer "yes" if number even otherwise answer "no".',
  getRound,
});
