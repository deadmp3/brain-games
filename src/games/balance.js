import run from '../engine';

const makeStrN = (str, n) => ((n !== 0) ? `${str}${makeStrN(str, n - 1)}` : '');

const balance = (num) => {
  const { length } = num;
  const sumNum = num.split('').reduce((acc, cur) => acc + +cur, 0);
  const div = Math.floor(sumNum / length);
  const m = sumNum % length;
  const head = makeStrN(div, length - m);
  const rest = makeStrN(div + 1, m);
  return `${head}${rest}`;
};

const getRound = () => {
  const rndNum = Math.floor(Math.random() * 10000).toString();
  return {
    question: `${rndNum}`,
    correctAnswer: balance(rndNum),
  };
};

export default () => run({
  description: 'Balance the given number.',
  getRound,
});
