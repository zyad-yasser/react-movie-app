import { useFetch } from '../../hooks/use-fetch.hook';
import { typesMap } from '../../statics/types';
import { listMoviesUrl } from '../../statics/urls';
import './movies-list.component.sass'

interface Props {
  type: string;
}

export const MoviesList = ({ type }: Props) => {
  const apiMovieType = typesMap[type];
  const { loading, error, data } = useFetch(`${listMoviesUrl}/${apiMovieType}`);
  console.log(data)
  return (<>
    X
  </>);
}