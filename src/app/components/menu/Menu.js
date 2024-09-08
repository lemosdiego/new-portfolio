import Link from "next/link";
import Styles from "./menu.module.css";

const Menu = () => {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.ul}>
        <li>
          <Link className={Styles.link} href="#home">
            Home
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#sobre">
            About me
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#certificados">
            Certificados
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#servicos">
            Serviços
          </Link>
        </li>
        <li>
          <Link className={Styles.link} href="#contatos">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
