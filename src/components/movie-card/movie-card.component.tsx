import { Link } from 'react-router-dom';
import { MovieListItem } from '../../types/movies';
import { getImageFullPath } from '../../utils/images';
import { CircleRating } from '../circle-rating/circle-rating.component';
import './movie-card.component.sass';

interface Props {
  movie: MovieListItem;
}

export const MovieCard = ({
  movie: { vote_average, title, release_date, poster_path, id },
}: Props) => (
  <div className="movie-card-col d-flex">
    <div className="movie-card">
      <div className="poster">
        <Link to={`/movie/${id}`}>
          <img src={getImageFullPath(poster_path)} height="100%" alt="poster" />
        </Link>
      </div>
      <div className="info d-flex align-items-start flex-column position-relative">
        <div className="rating position-absolute">
          <CircleRating rating={vote_average} />
        </div>
        <div className="title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </div>
        <div className="date">{release_date}</div>
      </div>
    </div>
  </div>
);
