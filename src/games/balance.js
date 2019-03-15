const fun = (str, n) => ((n !== 0) ? `${str}${fun(str, n - 1)}` : '');

const balance = (num) => {
  const { length } = num;
  const sumNum = num.split('').reduce((acc, cur) => acc + +cur, 0);
  const div = Math.floor(sumNum / length);
  const m = sumNum % length;
  const head = fun(div, length - m);
  const rest = fun(div + 1, m);
  return `${head}${rest}`;
};

export default () => {
  const rndNum = Math.floor(Math.random() * 10000).toString();
  const correctAnswer = balance(rndNum);
  return {
    question: `${rndNum}`,
    correctAnswer,
  };
};
