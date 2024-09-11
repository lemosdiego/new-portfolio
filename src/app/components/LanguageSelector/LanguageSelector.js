import React from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import Styles from "./LanguageSelector.module.css";
import { Box, Button } from "@mui/material";

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <Box className={Styles.languageSelector}>
      <Box className={`${Styles.flag} ${Styles.br}`}>
        <button
          color="inherit"
          className={Styles.p}
          onClick={() => handleLanguageChange("pt")}
        >
          PT
        </button>
      </Box>
      <Box className={`${Styles.flag} ${Styles.en}`}>
        <button
          color="inherit"
          className={Styles.p}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </button>
      </Box>
      <Box className={`${Styles.flag} ${Styles.es}`}>
        <button
          color="inherit"
          className={Styles.p}
          onClick={() => handleLanguageChange("es")}
        >
          ES
        </button>
      </Box>
    </Box>
  );
};

export default LanguageSelector;
