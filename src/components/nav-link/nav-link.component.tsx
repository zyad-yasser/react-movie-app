import './nav-link.component.sass';
import { NavButton, NavButtonProps } from '../../types/navbar';
import { Link } from 'react-router-dom';

export const NavLink = ({
  button: { name, path } = {} as NavButton,
}: NavButtonProps) =>
  path ? <Link to={path}>{name}</Link> : <div>{name}</div>;
