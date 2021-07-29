import { Col } from 'react-bootstrap'
import { headerCredits } from '../../statics/credits';
import { Movie } from '../../types/movies'
import { getPersonNameByJob } from '../../utils/credits';
import './movie-header-info.component.sass'

interface Props {
  movie: Movie
}

export const MovieHeaderInfo = ({ movie }: Props) => {
  const { tagline, overview, credits } = movie;
  return (<div className="header-info">
    <div className="tagline text-start">{ tagline }</div>
    <div className="title-big">Overview</div>
    <div className="overview">{ overview }</div>
    <div className="credits row">
      {credits && headerCredits.map(({ name, value, skip }, key) => <Col key={key} xs={4} className="one-credit">
        <div className="title-small">{getPersonNameByJob(credits, value, skip) }</div>
        <div className="value">{ name }</div>
      </Col>)}
    </div>
  </div>)
}