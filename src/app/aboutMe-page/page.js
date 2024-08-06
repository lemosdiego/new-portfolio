"use client";

import { useState } from "react";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Styles from "./aboutme.module.css";
import Header from "../pages/header/header";

const AboutMePage = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const renderContent = () => {
    switch (page) {
      case 1:
        return (
          <>
            <Typography variant="h2" className={Styles.h2}>
              Sobre Mim
            </Typography>
            <Typography className={Styles.p} variant="body1">
              Sou um programador front-end formado em Análise e Desenvolvimento
              de Sistemas e atualmente cursando Engenharia de Software. Natural
              de Pernambuco, atualmente divido meu tempo entre Recife e São
              Paulo, cidade pela qual me apaixonei desde a primeira visita.
              Minha jornada na programação começou na metade de 2021. No início,
              enfrentei algumas dificuldades, mas com persistência e dedicação,
              descobri minha capacidade e paixão pela área. A programação
              representou uma virada de página na minha vida, proporcionando
              crescimento pessoal e profissional. Meu objetivo é alcançar meu
              tão sonhado sucesso, pois sei que tenho a capacidade de sempre
              evoluir e me aprimorar. O front-end é apenas o começo de uma
              jornada de sucesso, e estou determinado a continuar avançando e
              conquistando meu espaço no mundo da tecnologia.
            </Typography>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h2" className={Styles.h2}>
              Gostos Pessoais
            </Typography>
            <Typography className={Styles.p} variant="body1">
              Sou uma pessoa apaixonada por viajar e explorar novos lugares.
              Entre os diversos destinos que já tive a oportunidade de conhecer
              pelo Brasil, a Chapada dos Veadeiros se destacou como o mais
              marcante. Lá, tive a chance de me conectar profundamente com a
              natureza através de suas cachoeiras deslumbrantes e trilhas
              revitalizantes. A natureza exerce um efeito renovador em mim, e
              sempre busco estar em contato com ela. Além das viagens, tenho um
              grande apreço por esportes como futebol e ciclismo, que me ajudam
              a manter um estilo de vida ativo e saudável. No universo dos
              games, sou fã do estilo battlegrounds, que sempre me proporciona
              momentos de diversão e desafio. Valorizo muito o tempo com minha
              família e adoro aproveitar os fins de semana para estar com eles,
              seja em atividades ao ar livre ou em momentos de lazer. Sou um
              grande apreciador de filmes e séries, e meus gêneros preferidos
              são os de guerra e de heróis. As histórias intensas e inspiradoras
              desses gêneros sempre me envolvem e me fascinam.
            </Typography>
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h2" className={Styles.h2}>
              Motivações
            </Typography>
            <Typography className={Styles.p} variant="body1">
              Minhas principais motivações na vida giram em torno de construir
              um futuro melhor e viver de maneira plena. Acredito que a
              tecnologia será a chave para alcançar esses objetivos, pois ela
              abre portas para inúmeras oportunidades e inovações. Tenho muitos
              sonhos, entre eles conhecer Machu Picchu, um destino que sempre me
              fascinou. Estou aguardando ansiosamente pela minha primeira grande
              oportunidade na área de tecnologia, onde poderei mostrar todo meu
              potencial e provar que sou capaz. Nunca desistir dos meus sonhos é
              a força motriz que me impulsiona diariamente, e essa determinação
              é a minha principal motivação.
            </Typography>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className={Styles.containerAbout}>
      <Box className={Styles.menu}>
        <Link href="/" passHref>
          <Button className={Styles.button} variant="contained">
            Home
          </Button>
        </Link>
        <Link href="/contact-page" passHref>
          <Button className={Styles.button} variant="contained">
            Contacts
          </Button>
        </Link>
      </Box>
      <Box className={Styles.containerDescription}>{renderContent()}</Box>
      <Box className={Styles.containerPagination}>
        <Stack className={Styles.stack} spacing={2}>
          <Pagination
            className={Styles.pagination}
            count={3}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "#e53939",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#e539398b",
                },
                "&.Mui-selected": {
                  backgroundColor: "#e94226",
                  color: "#fff",
                },
              },
            }}
          />
        </Stack>
      </Box>
    </section>
  );
};

export default AboutMePage;
