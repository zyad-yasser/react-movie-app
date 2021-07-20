export interface Filter {
  name: string;
  component: (() =>JSX.Element);
}