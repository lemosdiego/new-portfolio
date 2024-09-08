import { Box, Typography } from "@mui/material";
import styles from "./Service.module.css";
import CardService from "@/app/components/CardServices/CardServices";
import { servicesData } from "@/app/data/serviceData";

const Service = () => {
  return (
    <section className={styles.services}>
      <Box className={styles.title}>
        <Typography variant="h2" className={styles.h2}>
          Services
        </Typography>
      </Box>
      <Box className={styles.container_cards}>
        {servicesData.map((service) => (
          <CardService
            key={service.id}
            image={service.image}
            title={service.title}
            features={service.features}
          />
        ))}
      </Box>
    </section>
  );
};

export default Service;
