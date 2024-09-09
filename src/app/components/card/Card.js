import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Styles from "./card.module.css";
import { useTranslation } from "../../../../context/TranslationContext";
import { useLanguage } from "../../../../context/LanguageContext";
import { projectTranslation } from "../../../../context/ProjectTranslation";

const ImgMediaCard = ({ cardData }) => {
  const [open, setOpen] = useState(false);
  const { translate } = useTranslation();
  const { language } = useLanguage();
  const t = projectTranslation[language];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const { id, image, buttonLink2, buttonLink3 } = cardData;

  return (
    <>
      <Card className={Styles.containerCard}>
        <CardMedia
          className={Styles.containerImage}
          component="img"
          alt={translate(id, "title")}
          height="140"
          image={image}
        />
        <CardContent className={Styles.containerDescription}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className={Styles.h5}
          >
            {translate(id, "title")}
          </Typography>
          <Typography variant="body2" className={Styles.p}>
            {translate(id, "description")}
          </Typography>
        </CardContent>
        <CardActions className={Styles.containerButton}>
          <Button
            size="small"
            href={buttonLink2}
            target="_blank"
            className={Styles.button}
            id={`buttonLink2-${id}`}
          >
            {t.buttonLink2}
          </Button>
          <Button
            size="small"
            href={buttonLink3}
            target="_blank"
            className={Styles.button}
            id={`buttonLink3-${id}`}
          >
            {t.buttonLink3}
          </Button>
          <Button
            size="small"
            onClick={handleOpen}
            className={Styles.button}
            id={`more-${id}`}
          >
            {t.more}
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        className={Styles.containerModal}
      >
        <Box sx={modalStyle} className={Styles.modal}>
          <Typography variant="h6" component="h2" className={Styles.h3}>
            {translate(id, "modalTitle")}
          </Typography>
          <Typography sx={{ mt: 2 }} className={Styles.p}>
            {translate(id, "modalDescription")}
          </Typography>
          <Button onClick={handleClose} id={`close-${id}`}>
            {t.close}
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ImgMediaCard;
