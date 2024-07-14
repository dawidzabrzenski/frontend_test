import { Link } from "react-router-dom";

function Header({ nameVisible }) {
  return (
    <header className="header">
      <Link to="/">
        <img src="html5.svg" alt="HTML5 Logo" className="header__img" />
      </Link>

      <div>
        <h2 className="header__text">
          Zadanie <strong>rekrutacyjne</strong>
        </h2>
        {nameVisible && <p className="header__text">Dawid Zabrzeński</p>}
      </div>
    </header>
  );
}

export default Header;
