import './nav-drop-down.component.sass';
import { NavButtonProps } from '../../types/navbar';
import { Dropdown } from 'react-bootstrap';
import React, { useState } from 'react';
import { NavLink } from '../nav-link/nav-link.component';

export const NavDropDown = ({ button }: NavButtonProps) => {
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
          {button!.children!.map(({ name, path }, key: number) => (
            <Dropdown.Item>
              <NavLink button={{ name, path }} key={key}/>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
