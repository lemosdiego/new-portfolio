import Link from "next/link";
import Styles from "./aboutme.module.css";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <section className={Styles.about} id="sobre">
      <div className={Styles.title}>
        <Typography className={Styles.h2} variant="h2">
          About me
        </Typography>
      </div>
      <Box className={Styles.containerTimeline}>
        <div className={Styles.container_timeline}>
          <div className={Styles.timeline}>
            <div className={`${Styles.container} ${Styles.leftContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>Sobre mim</h2>
                <p>
                  Olá, sou Washington, tenho 30 anos e sou natural de Recife.
                  Atualmente, moro entre Recife e São Paulo. Sou formado em
                  Análise e Desenvolvimento de Sistemas e estou cursando
                  Engenharia de Software para aprofundar meu conhecimento na
                  área de tecnologia.
                </p>
                <p>
                  A programação foi uma verdadeira virada de chave na minha
                  vida. Em um momento em que estava em busca de crescimento
                  pessoal e profissional, a tecnologia me ofereceu uma
                  oportunidade de transformação e evolução. Decidi investir na
                  programação não apenas como uma carreira, mas como uma forma
                  de desenvolver novas habilidades e encontrar uma profissão que
                  realmente me realizasse. Essa jornada tem sido emocionante e
                  desafiadora, e estou empolgado com o futuro e as oportunidades
                  que virão.
                </p>
                <span className={Styles.leftContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.rightContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>Quando Tudo Começou</h2>
                <h3>2021</h3>
                <p>
                  Em meados de 2021, decidi começar a estudar programação. Os
                  primeiros passos foram desafiadores; como em qualquer nova
                  jornada, houve momentos de dúvida e a sensação de que eu
                  poderia não conseguir aprender. No entanto, o meu interesse e
                  paixão pela tecnologia sempre foram maiores do que as
                  dificuldades iniciais. Esse período de aprendizado inicial foi
                  fundamental para despertar em mim a determinação e o
                  entusiasmo necessários para seguir em frente.
                </p>
                <span className={Styles.rightContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.leftContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>Desenvolvimento do Interesse em Front-End</h2>
                <h3>2022</h3>
                <p>
                  Após ter contato com HTML, CSS e JavaScript e me aprofundar no
                  desenvolvimento de páginas web estáticas e interativas,
                  comecei a me interessar mais pelo desenvolvimento front-end. A
                  combinação dessas tecnologias despertou minha paixão por criar
                  interfaces visuais e experiências de usuário envolventes. A
                  possibilidade de construir aplicações que não apenas funcionam
                  bem, mas também são agradáveis de usar, me motivou a explorar
                  ainda mais essa área.
                </p>
                <p>
                  Comecei a estudar frameworks e bibliotecas como React e
                  Material UI, e me envolvi em projetos que exigiam uma maior
                  atenção ao design e à usabilidade. Essa nova paixão pelo
                  front-end foi um marco importante na minha jornada,
                  direcionando minha carreira para um campo que combina
                  criatividade e técnica de forma única.
                </p>
                <span className={Styles.leftContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.rightContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>Progresso em Projetos Front-End e Formação</h2>
                <h3>2023</h3>
                <p>
                  Em 2023, meu interesse por frameworks e bibliotecas front-end
                  continuou a crescer. Dediquei-me a criar diversos projetos
                  front-end, começando com meu primeiro portfólio, que foi
                  desenvolvido utilizando HTML, CSS e JavaScript. Esse projeto
                  foi uma oportunidade para aplicar o que aprendi e demonstrar
                  minhas habilidades na criação de interfaces e experiências de
                  usuário.
                </p>
                <p>
                  Com o tempo, evoluí para um novo portfólio, desta vez
                  utilizando Next.js. Este novo projeto não só aprimorou minhas
                  habilidades em desenvolvimento front-end, mas também me
                  permitiu explorar recursos avançados e melhorar a
                  funcionalidade e o desempenho das minhas aplicações.
                </p>
                <p>
                  Além disso, em dezembro de 2023, concluí minha formação em
                  Análise e Desenvolvimento de Sistemas. Esse marco acadêmico
                  foi um passo importante na minha jornada, consolidando meu
                  conhecimento e preparando-me para desafios futuros na área de
                  tecnologia.
                </p>
                <span className={Styles.rightContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.leftContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>Avanços em</h2>
                <h3>2024</h3>
                <p>
                  Em 2024, comecei um novo curso de Engenharia de Software,
                  buscando aprofundar ainda mais meu conhecimento e habilidades
                  na área de tecnologia. Para refletir essa evolução, atualizei
                  meu portfólio e desenvolvi vários novos projetos.
                </p>
                <p>
                  Chegar até aqui foi uma jornada cheia de aprendizados e
                  desafios, e estou em busca de uma oportunidade de trabalho,
                  seja um estágio ou uma posição júnior. Acredito que posso
                  evoluir ainda mais ao vivenciar projetos reais e aplicar meus
                  conhecimentos em um ambiente profissional. Estou pronto para
                  contribuir e crescer com uma equipe dedicada e inovadora.
                </p>
                <span className={Styles.leftContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.rightContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>
                  Se Você Chegou Até Aqui, Conheça um Pouco Mais Sobre Mim
                </h2>
                <p>
                  Além da programação, sou uma pessoa apaixonada por viajar e
                  explorar novos lugares. Entre os diversos destinos que já tive
                  a oportunidade de conhecer pelo Brasil, a Chapada dos
                  Veadeiros se destacou como o mais marcante. Lá, tive a chance
                  de me conectar profundamente com a natureza através de suas
                  cachoeiras deslumbrantes e trilhas revitalizantes. A natureza
                  exerce um efeito renovador em mim, e sempre busco estar em
                  contato com ela.
                </p>
                <p>
                  Além das viagens, tenho um grande apreço por esportes como
                  futebol e ciclismo, que me ajudam a manter um estilo de vida
                  ativo e saudável. No universo dos games, sou fã do estilo
                  battlegrounds, que sempre me proporciona momentos de diversão
                  e desafio.
                </p>
                <p>
                  Valorizo muito o tempo com minha família e adoro aproveitar os
                  fins de semana para estar com eles, seja em atividades ao ar
                  livre ou em momentos de lazer. Sou também um grande apreciador
                  de filmes e séries, com uma preferência especial por aqueles
                  com temas de guerra e heróis. As histórias intensas e
                  inspiradoras desses gêneros sempre me envolvem e fascinam.
                </p>
                <span className={Styles.rightContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.leftContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>Minhas Motivações e Visões de Futuro</h2>
                <p>
                  Minha principal motivação é alcançar meu tão sonhado SIM,
                  provando para mim mesmo que sou capaz de crescer tanto
                  profissionalmente quanto pessoalmente. Este objetivo não é
                  apenas sobre conquistar uma posição ou um título, mas sobre
                  demonstrar minha capacidade de superar desafios e alcançar
                  minhas metas com dedicação e esforço.
                </p>
                <p>
                  Minha visão de futuro é viver fazendo o que aprendi a gostar,
                  especialmente no campo da tecnologia. Acredito que, com o
                  conhecimento e as habilidades que desenvolvi, poderei
                  construir uma carreira gratificante e significativa. Além
                  disso, desejo aproveitar as oportunidades que a tecnologia
                  pode proporcionar para viajar e conhecer novos lugares,
                  experimentando momentos únicos com minha família.
                </p>
                <p>
                  Com a ajuda da tecnologia, estou confiante de que poderei
                  realizar esses sonhos e criar uma vida plena e equilibrada.
                  Acredito que a combinação de crescimento profissional,
                  exploração do mundo e tempo de qualidade com meus entes
                  queridos formará a base de um futuro satisfatório e
                  gratificante.
                </p>
                <span className={Styles.leftContainerArrow}></span>
              </div>
            </div>
            <div className={`${Styles.container} ${Styles.rightContainer}`}>
              <div className={Styles.iconContainer}></div>
              <div className={Styles.textBox}>
                <h2>O Que Esperar de Mim</h2>
                <p>
                  Você pode esperar de mim uma grande vontade de aprender e uma
                  abordagem autodidata para o desenvolvimento profissional.
                  Tenho uma forte determinação para aprender na prática e
                  enfrentar desafios de frente, o que me permite crescer
                  constantemente e evoluir como profissional.
                </p>
                <p>
                  Uma das minhas principais qualidades é a capacidade de ser
                  autodidata. Estou sempre em busca de novas formas de adquirir
                  conhecimento e aprimorar minhas habilidades, mesmo fora dos
                  ambientes formais de aprendizado. Esse espírito proativo me
                  ajuda a enfrentar problemas complexos e encontrar soluções
                  criativas.
                </p>
                <p>
                  Estou ciente de que o caminho não será fácil, mas acredito
                  firmemente que os desafios são oportunidades valiosas de
                  aprendizado. Estou preparado para encarar dificuldades,
                  sabendo que é através desses desafios que conseguiremos
                  aprender e evoluir.
                </p>
                <p>
                  Espero trazer para a equipe não apenas minhas habilidades
                  técnicas, mas também meu entusiasmo para enfrentar novos
                  desafios e minha disposição para crescer e me adaptar. Estou
                  pronto para contribuir e evoluir em um ambiente que valorize a
                  inovação e o desenvolvimento contínuo.
                </p>
                <span className={Styles.rightContainerArrow}></span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default About;
