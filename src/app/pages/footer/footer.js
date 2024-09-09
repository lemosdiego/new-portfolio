"use client";

import React from "react";
import { Typography } from "@mui/material";
import Styles from "./footer.module.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { footerTranslation } from "../../../../context/footerTranslate";
const Footer = () => {
  const { language } = useLanguage();
  const t = footerTranslation[language];

  return (
    <footer className={Styles.containerFooter}>
      <Typography className={Styles.copy}>{t.copyright}</Typography>
    </footer>
  );
};

export default Footer;
