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
        <Button className={Styles.p} onClick={() => handleLanguageChange("pt")}>
          PT
        </Button>
      </Box>
      <Box className={`${Styles.flag} ${Styles.en}`}>
        <Button className={Styles.p} onClick={() => handleLanguageChange("en")}>
          EN
        </Button>
      </Box>
      <Box className={`${Styles.flag} ${Styles.es}`}>
        <Button className={Styles.p} onClick={() => handleLanguageChange("es")}>
          ES
        </Button>
      </Box>
    </Box>
  );
};

export default LanguageSelector;
