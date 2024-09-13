"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Service.module.css";
import CardService from "@/app/components/CardServices/CardServices";
import { servicesData } from "@/app/data/serviceData";
import { useLanguage } from "../../../../context/LanguageContext";

const Service = () => {
  const { language } = useLanguage();

  return (
    <section className={styles.services} id="servicos">
      <Box className={styles.title}>
        <Typography variant="h2" className={styles.h2}>
          {language === "pt"
            ? "Serviços"
            : language === "es"
            ? "Servicios"
            : "Services"}
        </Typography>
      </Box>
      <Box className={styles.container_cards}>
        {servicesData.map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            title={service.title[language] || service.title.pt}
            features={service.features[language] || service.features.pt}
          />
        ))}
      </Box>
    </section>
  );
};

export default Service;
