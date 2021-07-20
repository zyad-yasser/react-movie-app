import './nav-button.component.sass';
import { NavButton as INavButton } from '../../types/navbar';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

interface Props {
  button: INavButton;
}

export const NavDropDown = ({ button }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const handleDropdownOnHover = ({ type }: any) => {
    const show = Boolean(type === 'mouseenter');
    setShow(show);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    return false;
  };

  return (
    <div className="nav-drop-down">
      <Dropdown onMouseLeave={handleDropdownOnHover}>
        <div onClick={handleClick} onMouseEnter={handleDropdownOnHover}>
          <NavLink button={button} />
        </div>

        <Dropdown.Menu show={show!}>
          {button.children!.map(({ name, path }, key: number) => (
            <Dropdown.Item>
              <NavLink button={{ name, path }} key={key}/>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const NavLink = ({ button: { name, path } }: Props) =>
  path ? <Link to={path}>{name}</Link> : <div>{name}</div>;

export const NavButton = ({ button }: Props) => (
  <div className="nav-button">
    {button.children ? (
      <NavDropDown button={button} />
    ) : (
      <NavLink button={button} />
    )}
  </div>
);
