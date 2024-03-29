import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MoviesList } from '../../components/movies-list/movies-list.component';
import { SideFilters } from '../../components/side-filters/side-filters.component';
import { PageProps } from '../../types/main';
import { setPageTitle } from '../../utils/main';
import { capetalizeFirstLetter } from '../../utils/text';
import './movies.page.sass';

export const MoviesPage = (props: PageProps) => {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { type } = props.match!.params;
    const title = `${capetalizeFirstLetter(type)} Movies`;
    setTitle(title);
    setPageTitle(title);
    setType(type);
  }, [props.match]);

  return (
    <>
      <div className="main-title text-start h2">{title}</div>
      <div className="page">
        <Container fluid>
          <Row>
            <Col className="p-0 filters-col">
              <SideFilters />
            </Col>
            <Col className="movies-col">
              <MoviesList type={type} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
