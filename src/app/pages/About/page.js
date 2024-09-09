"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Styles from "./aboutme.module.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { AboutTranslation } from "../../../../context/AboutTranlation";
import Image from "next/image";

const About = () => {
  const { language } = useLanguage();
  const t = AboutTranslation[language];

  return (
    <section className={Styles.about} id="sobre">
      <div className={Styles.title}>
        <Typography className={Styles.h2} variant="h2">
          {t.title}
        </Typography>
      </div>
      <Box className={Styles.containerTimeline}>
        <div className={Styles.container_timeline}>
          <div className={Styles.timeline}>
            {t.sections.map((section, index) => (
              <div
                key={index}
                className={`${Styles.container} ${
                  index % 2 === 0 ? Styles.leftContainer : Styles.rightContainer
                }`}
              >
                <div className={Styles.iconContainer}>
                  <Image src={section.icon} alt={section.title} layout="fill" />
                </div>
                <div className={Styles.textBox}>
                  <h2>{section.title}</h2>
                  {section.year && <h3>{section.year}</h3>}
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                  <span
                    className={
                      index % 2 === 0
                        ? Styles.leftContainerArrow
                        : Styles.rightContainerArrow
                    }
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </section>
  );
};

export default About;
