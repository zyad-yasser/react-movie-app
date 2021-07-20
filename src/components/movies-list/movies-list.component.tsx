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
  const { loading, error, data } = useFetch<PaginationOf<MovieListItem[]>>(
    `${listMoviesUrl}/${apiMovieType}`
  );
  console.log(data);
  return (
    <div className="movie-list row w-100 m-0">
      {data?.results?.length &&
        data.results.map((movie: MovieListItem, key: number) => (
          <MovieCard key={key} movie={movie} />
        ))}
    </div>
  );
};
