import { PageProps } from '../../types/main';
import { setTitle } from '../../utils/main';
import { capetalizeFirstLetter } from '../../utils/text';
import './movies.page.sass';

export const MoviesPage = (props: PageProps) => {
  const { type } = props.match!.params;
  const title = `${ capetalizeFirstLetter(type) } Movies`;
  setTitle(title);

  return (<>
    <div className="main-title text-start h2">{ title }</div>
    <div className="page">
      
    </div>
  </>)
}