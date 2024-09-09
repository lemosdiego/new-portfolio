import { Box, Typography } from "@mui/material";
import styles from "./CardServices.module.css";

const CardService = ({ image, title, features }) => {
  return (
    <Box className={`${styles.card} ${styles["fade-in"]}`}>
      <Box className={styles.icon}>
        <img src={image} alt={title.pt} className={styles.image} />
      </Box>
      <Typography variant="h5" className={styles.title}>
        {title}
      </Typography>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CardService;
