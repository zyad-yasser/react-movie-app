export const capetalizeFirstLetter = (title: string) => {
  return title ? `${ title.charAt(0).toLocaleUpperCase() }${title.substr(1)}` : '';
};
