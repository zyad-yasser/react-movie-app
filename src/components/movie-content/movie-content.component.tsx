import { useFetch } from '../../hooks/use-fetch.hook';
import { getMovieDataUrl } from '../../statics/urls';
import { PaginationOf } from '../../types/main';
import { MovieListItem } from '../../types/movies';
import { MovieHeader } from '../movie-header/movie-header.component';
import { MovieInfo } from '../movie-info/movie-info.component';
import './movie-content.component.sass';

interface Props {
  id: string;
}

export const MovieContent = ({ id }: Props) => {
  // TODO: Do loading and error handling
  const { data } = useFetch<PaginationOf<MovieListItem[]>>(
    `${getMovieDataUrl}/${id}`
  );
  console.log(data);
  return (
    <div className="movie-content w-100">
      <MovieHeader />
      <MovieInfo />
    </div>
  );
};
