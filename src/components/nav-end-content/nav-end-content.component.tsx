import { NavButton } from '../nav-button/nav-button.component';
import './nav-end-content.component.sass';

export const NavEndContent = () => (
  <div className="nav-end-content d-flex align-items-center">
    <NavButton>
      <img src="/icons/add.svg" alt="add" height="23px" />
    </NavButton>
    <NavButton>
      <div className="lang-switch d-flex align-items-center justify-content-center">EN</div>
    </NavButton>
    <NavButton>
      <>Login</>
    </NavButton>
    <NavButton>
      <>Join TMDb</>
    </NavButton>
    <NavButton>
      <img src="/icons/search.svg" alt="add" height="29px" />
    </NavButton>
  </div>
);
