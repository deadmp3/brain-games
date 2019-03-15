const isPrime = (n, i) => {
  if (i <= 1) return true;
  if (n % i === 0) return false;
  return isPrime(n, i - 1);
};

export default () => {
  const rndNum = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(rndNum, Math.floor(Math.sqrt(rndNum))) ? 'yes' : 'no';
  return {
    question: rndNum,
    correctAnswer,
  };
};
