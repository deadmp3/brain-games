const getGCD = (a, b) => {
  if (!(a && b)) {
    return a + b;
  }
  if (a > b) {
    return getGCD(a % b, b);
  }
  return getGCD(a, b % a);
};

export default () => {
  const rndNum1 = Math.floor(Math.random() * 100);
  const rndNum2 = Math.floor(Math.random() * 100);
  const correctAnswer = getGCD(rndNum1, rndNum2).toString();
  return {
    question: `${rndNum1} ${rndNum2}`,
    correctAnswer,
  };
};
