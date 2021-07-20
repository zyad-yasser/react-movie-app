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

export type PaginationOf<T> = {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
} 