const getRandomInt = (max: number) => {
  const randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
};

const generatePassword = () => {
  const passwordLength = getRandomInt(10);
  const password = Array(passwordLength).fill(null).map(() => String.fromCharCode(getRandomInt(97) + 97)).join('');
  return password;
};
