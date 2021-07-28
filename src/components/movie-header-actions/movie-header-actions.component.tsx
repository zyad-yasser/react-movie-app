import { actionButtons } from '../../statics/action-buttons';
import { Movie } from '../../types/movies';
import { CircleRating } from '../circle-rating/circle-rating.component';
import './movie-header-actions.component.sass';

export interface Props {
  movie: Movie;
}

export const MovieHeaderActions = ({ movie: { vote_average } }: Props) => (
  <div className="movie-header-actions d-flex align-items-center">
    <div className="rating-place d-flex align-items-center">
      <div className="rating">
        <CircleRating rating={vote_average} />
      </div>
      <div className="caption ms-2 d-flex">User score</div>
    </div>
    <div className="buttons d-flex align-items-center">
      {actionButtons.map(({ icon }) => (
        <button className="circle">
          <img src={`/icons/${icon}.svg`} alt={icon} />
        </button>
      ))}
      <button className="play d-flex align-items-center justify-content-center">
        <img className="me-1" height="20px" src={`/icons/play.svg`} alt="play" />
        Play trailer
      </button>
    </div>
  </div>
);
