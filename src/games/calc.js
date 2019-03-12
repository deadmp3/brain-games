const operations = [
  { sign: '+', action: (a, b) => a + b },
  { sign: '-', action: (a, b) => a - b },
  { sign: '*', action: (a, b) => a * b },
];

export default () => {
  const rndNum1 = Math.floor(Math.random() * 100);
  const rndNum2 = Math.floor(Math.random() * 100);
  const operation = operations[Math.floor(Math.random() * 3)];
  const correctAnswer = operation.action(rndNum1, rndNum2).toString();
  return {
    question: `${rndNum1} ${operation.sign} ${rndNum2}`,
    correctAnswer,
  };
};
