"use client";

import React, { useRef } from "react";
import ImgMediaCard from "@/app/components/card/Card";
import { dataBase } from "@/app/data/dataBase";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Styles from "./project.module.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { projectTranslation } from "../../../../context/ProjectTranslation";

const Projects = () => {
  const { language } = useLanguage();
  const t = projectTranslation[language];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <Grid id="projects" className={Styles.grid_container}>
      <Box className={Styles.containerTitle}>
        <Typography className={Styles.h2} variant="h2">
          {t.titleSection}
        </Typography>
      </Box>
      <Box className={Styles.IconLeft} onClick={scrollLeft}>
        <Image
          className={Styles.img}
          src="/esquerda.svg"
          alt="Ícone de rolagem para a esquerda"
          width={100}
          height={100}
        />
      </Box>
      <Box ref={containerRef} className={Styles.containerProjects}>
        {dataBase.map((card) => (
          <ImgMediaCard key={card.id} cardData={card} />
        ))}
      </Box>
      <Box className={Styles.IconRight} onClick={scrollRight}>
        <Image
          className={Styles.img}
          src="/direita.svg"
          alt="Ícone de rolagem para a direita"
          width={100}
          height={100}
        />
      </Box>
    </Grid>
  );
};

export default Projects;
