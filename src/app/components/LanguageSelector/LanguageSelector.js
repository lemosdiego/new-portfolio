import React from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import Styles from "./LanguageSelector.module.css";
import { Box, Typography } from "@mui/material";

const LanguageSelector = () => {
  const { changeLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <Box className={Styles.languageSelector}>
      <Box className={`${Styles.flag} ${Styles.br}`}>
        <Typography
          className={Styles.p}
          onClick={() => handleLanguageChange("pt")}
        >
          PT
        </Typography>
      </Box>
      <Box className={`${Styles.flag} ${Styles.en}`}>
        <Typography
          className={Styles.p}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </Typography>
      </Box>
      <Box className={`${Styles.flag} ${Styles.es}`}>
        <Typography
          className={Styles.p}
          onClick={() => handleLanguageChange("es")}
        >
          ES
        </Typography>
      </Box>
    </Box>
  );
};

export default LanguageSelector;
