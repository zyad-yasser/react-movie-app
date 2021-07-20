export interface ComponentProps {
  children?: JSX.Element,
}

export interface PageProps {
  match?: {
    params: {
      [key: string]: string;
    }
  }
}