import { MovieListItem } from '../../types/movies';
import { CircleRating } from '../circle-rating/circle-rating.component';
import './movie-card.component.sass';

interface Props {
  movie: MovieListItem;
}

export const MovieCard = ({ movie }: Props) => (
  <div className="movie-card-col">
    <div className="movie-card">
      <div className="poster">
        <img src={''} height="100%" alt="poster" />
      </div>
      <div className="info">
        <div className="rating">
          <CircleRating rating={movie.vote_average} />
        </div>
        <div className="title">{movie.title}</div>
        <div className="date">{movie.release_date}</div>
      </div>
    </div>
  </div>
);
