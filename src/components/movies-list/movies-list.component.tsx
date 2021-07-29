import { Spinner } from 'react-bootstrap';
import { useFetch } from '../../hooks/use-fetch.hook';
import { typesMap } from '../../statics/types';
import { listMoviesUrl } from '../../statics/urls';
import { PaginationOf } from '../../types/main';
import { MovieListItem } from '../../types/movies';
import { MovieCard } from '../movie-card/movie-card.component';
import './movies-list.component.sass';

interface Props {
  type: string;
}

export const MoviesList = ({ type }: Props) => {
  const apiMovieType = typesMap[type];
  // TODO: Do loading and error handling
  const { data, loading } = useFetch<PaginationOf<MovieListItem[]>>(
    `${listMoviesUrl}/${apiMovieType}`
  );
  return (
    <>
      {loading && <Spinner animation="grow" />}
      {!loading && (
        <div className="movie-list justify-content-between row w-100">
          {data?.results?.length &&
            data.results.map((movie: MovieListItem, key: number) => (
              <MovieCard key={key} movie={movie} />
            ))}
        </div>
      )}
    </>
  );
};
