"use client";

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Menu from "@/app/components/menu/Menu";
import DarkModeToggle from "@/app/components/theme/Theme";
import Link from "next/link";
import LanguageSelector from "@/app/components/LanguageSelector/LanguageSelector";
import { useLanguage } from "../../../../context/LanguageContext";
import { headerTranslations } from "../../../../context/HeaderTranslation";
import Styles from "./header.module.css";

const Header = () => {
  const { language } = useLanguage();
  const t = headerTranslations[language];

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
        <Box className={Styles.flags}>
          <LanguageSelector />
        </Box>
        <Box className={Styles.menuDescription}>
          <Typography className={Styles.p}>{t.menu}</Typography>
        </Box>
        <Box className={Styles.iconOpen} id="open" onClick={abrirMenu}>
          <Image
            className={Styles.icon}
            src="/openMenu.svg"
            alt="Open menu icon"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box className={Styles.iconClose} id="close" onClick={fecharMenu}>
          <Image
            src="/closeMenu.svg"
            alt="Close menu icon"
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
                alt={t.whatsappAlt}
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
                alt={t.linkedinAlt}
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box className={Styles.networks}>
            <Link href="https://github.com/lemosdiego" target="_blank">
              <Image
                src="/github.svg"
                alt={t.githubAlt}
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
                alt={t.instagramAlt}
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box className={Styles.containerNav}>
          <Menu />
        </Box>
      </header>
    </>
  );
};

export default Header;
