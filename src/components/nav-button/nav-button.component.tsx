import { NavButtonProps } from '../../types/navbar';
import { NavDropDown } from '../nav-drop-down/nav-drop-down.component';
import { NavLink } from '../nav-link/nav-link.component';
import './nav-button.component.sass';

export const NavButton = ({ button, children }: NavButtonProps) => (
  <div className="nav-button">
    { children && children }
    {button && button.children ? (
      <NavDropDown button={button} />
    ) : (
      <NavLink button={button} />
    )}
  </div>
);
