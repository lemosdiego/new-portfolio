"use-client";
import { Box, Button, Typography } from "@mui/material";
import Styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
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
              Olá a todos, eu sou
            </Typography>
            <Typography variant="h1" className={Styles.h1}>
              Washington Lemos
            </Typography>
            <Typography variant="h2" className={Styles.h2}>
              Front end web developer
            </Typography>
            <Typography className={Styles.p}>
              Sou programador front-end, natural de Recife, mas atualmente
              resido entre Recife e São Paulo. Tenho experiência com HTML, CSS,
              JavaScript e framework como Next.js. Estou em busca de novas
              oportunidades para aplicar minhas habilidades e contribuir para
              projetos inovadores.
            </Typography>
          </Box>
          <Box className={Styles.networks}>
            <Link href="https://WA.me/5581982383803" target="_blank">
              <Box className={Styles.icons}>
                <Image
                  src="/whats.svg"
                  alt="Whatsapp menssenger"
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
                  alt="Linkedin menssenger"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Link>
            <Link href="https://ig.me/m/washington.lemos_" target="_blank">
              <Box className={Styles.icons}>
                <Image
                  src="/messenger.svg"
                  alt="logo instagram"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Link>
            <Button
              className={Styles.button}
              href="https://drive.google.com/file/d/1SNk7sdN6jDRRDpF_n_w4PBEpxEXvZ1IY/view?usp=drive_link"
              target="_blank"
            >
              Curriculo
            </Button>
            <Button
              className={Styles.button}
              href="https://drive.google.com/drive/folders/1zDTjqRBDQOFBmYn4MCzDyF1tl_CG-VV8?usp=drive_link"
              target="_blank"
            >
              Certificados
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Home;
