import { navStartContent } from '../../statics/navbar';
import { NavButton } from '../nav-button/nav-button.component';
import { NavButton as INavButton } from '../../types/navbar';
import './nav-start-content.component.sass';

export const NavStartContent = () => (
  <>
    {navStartContent.map((button: INavButton, key: number) => (
      <NavButton button={button} key={key} />
    ))}
  </>
);
