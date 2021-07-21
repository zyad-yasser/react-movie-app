import { useEffect, useState } from 'react';
import { MovieContent } from '../../components/movie-content/movie-content.component';
import { PageProps } from '../../types/main';
import './movie.page.sass';

export const MoviePage = (props: PageProps) => {
  const [id, setId] = useState('');

  useEffect(() => {
    const { id } = props.match!.params;
    setId(id);
  }, [props.match]);

  return (<MovieContent id={id} />);
}
