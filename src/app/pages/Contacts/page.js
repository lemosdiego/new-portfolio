"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Styles from "./contact.module.css";
import { useLanguage } from "../../../../context/LanguageContext";
import { contactTranslation } from "../../../../context/ContactsTranslation";
const ContactPage = () => {
  const { language } = useLanguage();
  const t = contactTranslation[language];

  return (
    <section className={Styles.containerContact} id="contatos">
      <Box className={Styles.title}>
        <Typography variant="h2" className={Styles.h2}>
          {t.title}
        </Typography>
      </Box>
      <Box className={Styles.container}>
        <Box className={Styles.redes}>
          <Typography variant="h5" className={Styles.text}>
            {t.description}
          </Typography>
          <Box className={Styles.descricao}>
            <ul>
              <a
                href="https://www.linkedin.com/in/washington-lemos-033177186/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>{t.linkedin}</li>
              </a>
              <a
                href="https://www.instagram.com/washington.lemos_/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>{t.instagram}</li>
              </a>
              <a
                href="https://www.facebook.com/washington.lemos.961/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>{t.facebook}</li>
              </a>
              <a
                href="https://WA.me/5581982383803"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>{t.whatsapp}</li>
              </a>
            </ul>
          </Box>
        </Box>
        <Box className={Styles.formulario}>
          <Box className={Styles.form}>
            <form action="https://api.staticforms.xyz/submit" method="post">
              <input
                type="hidden"
                name="accessKey"
                value="71bf7d3e-399a-41d9-a329-ea4cb2e65419"
              />
              <input type="hidden" name="redirectTo" value="/" />
              <input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                required
                maxLength={25}
                minLength={2}
              />
              <input
                type="text"
                name="email"
                placeholder={t.emailPlaceholder}
                required
                maxLength={50}
              />
              <textarea
                name="message"
                required
                maxLength={150}
                placeholder={t.messagePlaceholder}
              ></textarea>
              <button>{t.sendButton}</button>
            </form>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ContactPage;
