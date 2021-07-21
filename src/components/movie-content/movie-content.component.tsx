import { useFetch } from '../../hooks/use-fetch.hook';
import { getMovieDataUrl } from '../../statics/urls';
import { Movie } from '../../types/movies';
import { MovieHeader } from '../movie-header/movie-header.component';
import { MovieInfo } from '../movie-info/movie-info.component';
import './movie-content.component.sass';

interface Props {
  id: string;
}

export const MovieContent = ({ id }: Props) => {
  // TODO: Do loading and error handling
  const { data } = useFetch<Movie>(
    `${getMovieDataUrl}/${id}`
  );
  console.log(data);
  return (
    <div className="movie-content">
      <MovieHeader movie={data}/>
      <MovieInfo />
    </div>
  );
};
