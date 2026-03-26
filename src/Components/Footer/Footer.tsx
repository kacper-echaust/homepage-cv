import css from "./Footer.module.scss";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.nameIconsContainer}>
        <div className={css.leftSide}>Kacper Echaust</div>
        <div className={css.rightSide}>
          <ul>
            <li>
              <a href="https://github.com/kacper-echaust">
                <img src={github} alt="github icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kacper-echaust-b13749286/">
                <img src={linkedin} alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.linksContainer}>
        <ul>
          <li>
            <a href="#about">O mnie</a>
          </li>
          <li>
            <a href="#skills">Umiejętności</a>
          </li>
          <li>
            <a href="#projects">Projekty</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
