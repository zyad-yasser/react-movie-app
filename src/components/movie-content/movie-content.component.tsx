import { useFetch } from '../../hooks/use-fetch.hook';
import { getMovieCreditsUrl, getMovieDataUrl } from '../../statics/urls';
import { Movie } from '../../types/movies';
import { MovieHeader } from '../movie-header/movie-header.component';
import { MovieInfo } from '../movie-info/movie-info.component';
import './movie-content.component.sass';

interface Props {
  id: string;
}

export const MovieContent = ({ id }: Props) => {
  // TODO: Do loading and error handling
  const { data: movie } = useFetch<Movie>(`${getMovieDataUrl}/${id}`);
  const { data: credits } = useFetch<any>(getMovieCreditsUrl(id));
  movie.credits = credits;
  return (
    <div className="movie-content">
      {Object.keys(movie).length && <MovieHeader movie={movie} />}
      <MovieInfo />
    </div>
  );
};
