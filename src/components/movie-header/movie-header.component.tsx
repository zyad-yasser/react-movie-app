import { Movie } from '../../types/movies'
import { getImageOriginalFullPath, getImageThumbnailFullPath } from '../../utils/images'
import { MovieHeaderActions } from '../movie-header-actions/movie-header-actions.component'
import { MovieHeaderInfo } from '../movie-header-info/movie-header-info.component'
import { MovieHeaderTitle } from '../movie-header-title/movie-header-title.component'
import './movie-header.component.sass'

interface Props {
  movie: Movie
}

export const MovieHeader = ({ movie }: Props) => {
  const { poster_path, backdrop_path } = movie;

  return (<div className="movie-header w-100 d-flex" style={{ backgroundImage: `url(${getImageOriginalFullPath(backdrop_path)})` }}>
    <div className="poster">
      <img src={getImageThumbnailFullPath(poster_path)} alt="poster"/>
    </div>
    <div className="movie-info flex-grow-1">
      <MovieHeaderTitle movie={movie} />
      <MovieHeaderActions />
      <MovieHeaderInfo movie={movie} />
    </div>
  </div>)
}