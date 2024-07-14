import FooterLogo from "./FooterLogo";

function Footer({ nameVisible, setNameVisible, dispatch }) {
  return (
    <footer className="footer">
      <FooterLogo />

      <div className="footer__name">
        <p>nabthat</p>
      </div>

      <input type="checkbox" id="toggle" />
      <label className="footer__popup" htmlFor="toggle">
        POKAŻ <span className="gg-push-chevron-up footer__popup__icon" />
      </label>

      <div className="footer__container">
        <button
          onClick={() => dispatch({ type: "resetAll" })}
          className="footer__container__button"
        >{`> ZRESETUJ USTAWIENIA`}</button>
        <button
          onClick={() => setNameVisible(!nameVisible)}
          className="footer__container__button"
        >
          {`> POKAŻ DANE OSOBOWE`}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
