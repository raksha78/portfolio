/* eslint-disable react/jsx-key */
import { headerItems } from './constants.js';
import './Header.css';

function Header({ setPage }) {
  function changePage(e) {
    e.preventDefault();
    window.history.pushState(null, '', e.target.pathname);
    setPage(e.target.pathname);
  }

  return (
    <div className="header">
      <a onClick={changePage} href={`/portfolio`} className="header__name">RAKSHITHA GURURAJ</a>
      <nav className="header__nav">
        <ul className="header__list">
          {headerItems.map((item) => (
            <a onClick={changePage} href={`/${item}`} className="header__list-item">{item.split('/')[2]}</a>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header