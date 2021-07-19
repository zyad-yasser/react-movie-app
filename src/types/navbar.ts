export interface NavButton {
  name: string,
  path?: string,
  query?: string,
  children?: NavButton[],
}