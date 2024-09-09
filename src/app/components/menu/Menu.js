import Link from "next/link";
import Styles from "./menu.module.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { menuTranslation } from "../../../../context/MenuTranslation";
const Menu = () => {
  const { language } = useLanguage();
  const translations = menuTranslation[language];

  return (
    <nav className={Styles.nav}>
      <ul className={Styles.ul}>
        <li>
          <Link className={Styles.link} href="#home">
            {translations.home}
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#about">
            {translations.about}
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#projects">
            {translations.projects}
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#skills">
            {translations.skills}
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#certificates">
            {translations.certificates}
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#services">
            {translations.services}
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#contacts">
            {translations.contacts}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
