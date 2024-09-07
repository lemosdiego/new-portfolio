import { Box, Typography } from "@mui/material";
import Styles from "./certificados.module.css";

const Certificates = () => {
  const certificatesData = [
    { id: 1, imageUrl: "/Certificados/diploma.png", title: "Certificado 1" },
    { id: 2, imageUrl: "/Certificados/logica.png", title: "Certificado 2" },
    { id: 3, imageUrl: "/Certificados/javascript.png", title: "Certificado 3" },
    { id: 4, imageUrl: "/Certificados/pan.png", title: "Certificado 4" },
    { id: 5, imageUrl: "/Certificados/ifood.png", title: "Certificado 5" },
    { id: 6, imageUrl: "/Certificados/html.png", title: "Certificado 6" },
  ];

  return (
    <section className={Styles.Certificates} id="certificados">
      <Box className={Styles.title}>
        <Typography variant="h2" className={Styles.h2}>
          Certificates
        </Typography>
      </Box>
      <Box className={Styles.scrollContainer}>
        <Box className={Styles.slider}>
          {[...certificatesData, ...certificatesData].map((certificate) => (
            <Box key={certificate.id} className={Styles.imgContainer}>
              <img
                src={certificate.imageUrl}
                alt={certificate.title}
                className={Styles.img}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Certificates;
