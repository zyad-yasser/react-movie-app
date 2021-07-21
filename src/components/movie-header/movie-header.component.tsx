import { Movie } from '../../types/movies'
import { MovieHeaderActions } from '../movie-header-actions/movie-header-actions.component'
import { MovieHeaderInfo } from '../movie-header-info/movie-header-info.component'
import { MovieHeaderTitle } from '../movie-header-title/movie-header-title.component'
import './movie-header.component.sass'

interface Props {
  movie: Movie
}

export const MovieHeader = ({ movie }: Props) => (<div className="movie-header">
  <div className="poster"></div>
  <div className="movie-info">
    <MovieHeaderTitle />
    <MovieHeaderActions />
    <MovieHeaderInfo />
  </div>
</div>)