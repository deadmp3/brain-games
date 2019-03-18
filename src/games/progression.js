import run from '../engine';

const fun = (first, step, n) => ((n !== 0) ? [first, ...fun(first + step, step, n - 1)] : []);

const getRound = () => {
  const first = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10);
  const n = 10;
  const index = Math.floor(Math.random() * 10).toString();
  const progression = fun(first, step, n);
  const correctAnswer = progression[index].toString();
  const question = progression.join(' ').replace(correctAnswer, '..');
  return {
    question,
    correctAnswer,
  };
};

export default () => run({
  description: 'What number is missing in this progression?',
  getRound,
});
