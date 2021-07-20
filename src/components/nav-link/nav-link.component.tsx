import './nav-link.component.sass';
import { NavButtonProps } from '../../types/navbar';
import { Link } from 'react-router-dom';


export const NavLink = ({ button: { name, path } }: NavButtonProps) =>
  path ? <Link to={path}>{name}</Link> : <div>{name}</div>;