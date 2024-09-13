"use client";

import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useLanguage } from "../../../../context/LanguageContext";
import Styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import { homeTranslations } from "../../../../context/homeTranslations";

const Home = () => {
  const { language } = useLanguage();
  const t = homeTranslations[language];

  // Estado para controlar o texto digitado
  const [typedText, setTypedText] = useState("");
  const fullText = t.name;
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;

    // Função para atualizar o texto digitado
    const type = () => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(type);
  }, [fullText]);

  return (
    <section className={Styles.containerHome} id="home">
      <Box className={Styles.containerPresentation}>
        <Box className={Styles.containerImage}>
          <Image
            src="/minhafoto.png"
            alt="Minha foto"
            layout="fill"
            className={Styles.img}
          />
        </Box>
        <Box className={Styles.containerDescription}>
          <Box className={Styles.containerApresentation}>
            <Typography variant="h6" className={Styles.h6}>
              {t.greeting}
            </Typography>
            <Typography variant="h1" className={Styles.h1}>
              {typedText}
            </Typography>
            <Typography variant="h2" className={Styles.h2}>
              {t.jobTitle}
            </Typography>
            <Typography className={Styles.p}>{t.description}</Typography>
          </Box>
          <Box className={Styles.networks}>
            <Link href="https://WA.me/5581982383803" target="_blank">
              <Box className={Styles.icons}>
                <Image
                  src="/whats.svg"
                  alt={t.whatsappAlt}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Link>
            <Link
              href="https://www.linkedin.com/in/washington-lemos-033177186/"
              target="_blank"
            >
              <Box className={Styles.icons}>
                <Image
                  src="/linke.svg"
                  alt={t.linkedinAlt}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Link>
            <Link href="https://ig.me/m/washington.lemos_" target="_blank">
              <Box className={Styles.icons}>
                <Image
                  src="/messenger.svg"
                  alt={t.instagramAlt}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Link>
            <Button
              className={Styles.button}
              href="https://drive.google.com/file/d/1_WSwg-zzqJH3NzcYZZhV9QTHVrtqvVXt/view?usp=sharing"
              target="_blank"
            >
              {t.resume}
            </Button>
            <Button
              className={Styles.button}
              href="https://drive.google.com/drive/folders/1zDTjqRBDQOFBmYn4MCzDyF1tl_CG-VV8?usp=drive_link"
              target="_blank"
            >
              {t.certificates}
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Home;
