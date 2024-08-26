"use client";

import { useEffect } from "react";
import Styles from "./header.module.css";
import { Box, Switch, Typography } from "@mui/material";
import Image from "next/image";
import DarkModeToggle from "@/app/components/theme/Theme";
import Link from "next/link";

const Header = () => {
  function abrirMenu() {
    const abrir = document.getElementById("header");
    const iconAbrir = document.getElementById("open");
    const iconFechar = document.getElementById("close");
    abrir.style.display = "flex";
    iconAbrir.style.display = "none";
    iconFechar.style.display = "block";
  }

  function fecharMenu() {
    const fechar = document.getElementById("header");
    const abrirMenu = document.getElementById("open");
    const fecharMenu = document.getElementById("close");

    fechar.style.display = "none";
    abrirMenu.style.display = "block";
    fecharMenu.style.display = "none";
  }

  useEffect(() => {
    // Fechar o menu ao rolar a página
    function handleScroll() {
      fecharMenu();
    }
    window.addEventListener("scroll", handleScroll);

    // Fechar o menu ao clicar fora do header
    function handleClickOutside(event) {
      const header = document.getElementById("header");
      if (header && !header.contains(event.target)) {
        fecharMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Box className={Styles.containerMenu} id="icon">
        <Box className={Styles.toggle}>
          <DarkModeToggle />
        </Box>
        <Box className={Styles.menuDescription}>
          <Typography className={Styles.p}>Menu</Typography>
        </Box>
        <Box className={Styles.iconOpen} id="open" onClick={abrirMenu}>
          <Image
            className={Styles.icon}
            src="/openMenu.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box className={Styles.iconClose} id="close" onClick={fecharMenu}>
          <Image
            src="/closeMenu.svg"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
      <header className={Styles.header} id="header">
        <Box className={Styles.networksContainer}>
          <Box className={Styles.networks}>
            <Link href="https://WA.me/5581982383803" target="_blank">
              <Image
                src="/whatsapp.svg"
                alt="logo instagram"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box className={Styles.networks}>
            <Link
              href="https://www.linkedin.com/in/washington-lemos-033177186/"
              target="_blank"
            >
              <Image
                src="/linkedin.svg"
                alt="logo instagram"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box className={Styles.networks}>
            <Link href="https://github.com/lemosdiego" target="_blank">
              <Image
                src="/github.svg"
                alt="logo Github"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box className={Styles.networks}>
            <Link
              href="https://www.instagram.com/washington.lemos_/?hl=pt-br"
              target="_blank"
            >
              <Image
                src="/insta.svg"
                alt="logo instagram"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box className={Styles.containerNav}>
          <nav className={Styles.nav}>
            <ul className={Styles.ul}>
              <li>
                <Link className={Styles.link} href="#home">
                  Home
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
                <Link className={Styles.link} href="/aboutMe-page">
                  About me
                </Link>
              </li>
              <li>
                <Link className={Styles.link} href="/contact-page">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </Box>
      </header>
    </>
  );
};

export default Header;
