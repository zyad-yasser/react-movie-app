export interface NavButton {
  name: string,
  path?: string,
  query?: string,
  children?: NavButton[],
}

export interface NavButtonProps {
  button?: NavButton;
  children?: JSX.Element;
}