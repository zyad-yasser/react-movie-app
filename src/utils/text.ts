export const capetalizeFirstLetter = (title: string) => {
  return title ? `${ title.charAt(0).toLocaleUpperCase() }${title.substr(1)}` : '';
};

export const getFirstFourLetters = (text: string) => {
  return text.substr(0, 4);
};
