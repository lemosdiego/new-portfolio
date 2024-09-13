"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Styles from "./skills.module.css";
import ProgressBar from "@/app/components/progressBar/ProgressBar";
import { progressBarData } from "@/app/data/dataProgresse";
import { progressBarData2 } from "@/app/data/dataProgresse";
import { useLanguage } from "../../../../context/LanguageContext";
import { skillsTranslation } from "../../../../context/SkilsTranslation";
const Skills = () => {
  const { language } = useLanguage();
  const t = skillsTranslation[language];

  return (
    <section id="skills" className={Styles.container}>
      <Box className={Styles.skillsTitle}>
        <Typography className={Styles.h2} variant="h2">
          {t.title}
        </Typography>
      </Box>
      <Box className={Styles.containerSkills}>
        <Box className={Styles.skills}>
          {progressBarData.map((item) => (
            <ProgressBar
              key={item.id}
              title={item.title}
              percentage={item.percentage}
              color={item.color}
            />
          ))}
        </Box>
        <Box className={Styles.skills}>
          {progressBarData2.map((item) => (
            <ProgressBar
              key={item.id}
              title={item.title}
              percentage={item.percentage}
              color={item.color}
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
