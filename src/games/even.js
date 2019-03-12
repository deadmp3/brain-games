export default () => {
  const rndNum = Math.floor(Math.random() * 100);
  const correctAnswer = rndNum % 2 === 0 ? 'yes' : 'no';
  return {
    question: `${rndNum}`,
    correctAnswer,
  };
};
