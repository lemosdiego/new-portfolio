import { Box, Button, Typography } from "@mui/material";
import Styles from "./contact.module.css";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className={Styles.containerContact} id="contatos">
      <Box className={Styles.title}>
        <Typography variant="h2" className={Styles.h2}>
          Contacts
        </Typography>
      </Box>
      <Box className={Styles.container}>
        <Box className={Styles.redes}>
          <Typography variant="h5" className={Styles.text}>
            Vamos Conversar?
          </Typography>
          <Box className={Styles.descricao}>
            <ul>
              <a
                href="https://www.linkedin.com/in/washington-lemos-033177186/"
                target="blank"
              >
                <li>Linkedin</li>
              </a>
              <a
                href="https://www.instagram.com/washington.lemos_/?hl=pt-br"
                target="blank"
              >
                <li>Instagram</li>
              </a>
              <a
                href="https://www.facebook.com/washington.lemos.961/?locale=pt_BR"
                target="blank"
              >
                <li>Facebook</li>
              </a>
              <a href="https://WA.me/5581982383803" target="blank">
                <li>Whatsapp</li>
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
                placeholder="Seu Nome"
                required
                maxLength={25}
                minLength={2}
              />
              <input
                type="text"
                name="email"
                placeholder="Seu Email"
                required
                maxLength={50}
              />
              <textarea
                name="message"
                required
                maxLength={150}
                placeholder="Deixe sua mensagem"
              ></textarea>
              <button>Enviar</button>
            </form>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ContactPage;
