const generateRandomTsCode = () => {
  const maxLength = 50;
  const minLength = 10;
  let randomCode = '';
  for (let i = 0; i < Math.floor(Math.random() * (maxLength - minLength) + minLength); i++) {
    const charCode = Math.floor(Math.random() * 26) + 97;
    randomCode += String.fromCharCode(charCode);
  }
  return randomCode;
};
