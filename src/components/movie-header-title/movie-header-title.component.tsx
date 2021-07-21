import { Movie } from '../../types/movies';
import { formatDuration } from '../../utils/numbers';
import { getFirstFourLetters } from '../../utils/text';
import './movie-header-title.component.sass';

interface Props {
  movie: Movie;
}

export const MovieHeaderTitle = ({ movie }: Props) => {
  const {
    title,
    release_date,
    genres,
    production_countries: [{ iso_3166_1: releaseCountryISO }],
    runtime,
    adult,
  } = movie;
  return (
    <div className="header-title d-flex flex-column align-items-start">
      <div className="title-row">
        <span className="title">{title} </span>
        <span className="year">({getFirstFourLetters(release_date)})</span>
      </div>
      <div className="sub-info-row d-flex">
        <div className="pg d-inline-flex justify-content-center align-items-center px-1 me-2">PG{!adult ? '-13' : ''}</div>
        <div className="date-place-release">
          {release_date} ({releaseCountryISO})
        </div>
        <div className="mx-2">•</div>
        <div className="genres">
          {genres.map(({ name }, key) => (
            <span key={key}>
              {name}{key < genres.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>
        <div className="mx-2">•</div>
        <div className="duration">{formatDuration(runtime)}</div>
      </div>
    </div>
  );
};
