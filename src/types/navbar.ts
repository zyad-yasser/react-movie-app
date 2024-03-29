import { ComponentProps } from './main';
export interface NavButton {
  name: string,
  path?: string,
  query?: string,
  children?: NavButton[],
}

export interface NavButtonProps extends ComponentProps {
  button?: NavButton;
}