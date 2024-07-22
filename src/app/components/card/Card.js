'use client';

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Styles from './card.module.css';

const ImgMediaCard = ({ cardData }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Card className={Styles.containerCard}>
                <CardMedia
                    className={Styles.containerImage}
                    component="img"
                    alt={cardData.title}
                    height="140"
                    image={cardData.image}
                />
                <CardContent className={Styles.containerDescription}>
                    <Typography gutterBottom variant="h5" component="div" className={Styles.h5}>
                        {cardData.title}
                    </Typography>
                    <Typography variant="body2" className={Styles.p}>
                        {cardData.description}
                    </Typography>
                </CardContent>
                <CardActions className={Styles.containerButton}>
                    <Button size="small" href={cardData.buttonLink2} target="_blank" className={Styles.button}>
                        {cardData.buttonText2}
                    </Button>
                    <Button size="small" href={cardData.buttonLink3} target="_blank" className={Styles.button}>
                        {cardData.buttonText3}
                    </Button>
                    <Button size="small" onClick={handleOpen} className={Styles.button}>
                        Ver mais
                    </Button>
                </CardActions>
            </Card>
            <Modal open={open} onClose={handleClose} className={Styles.containerModal} >
                <Box sx={modalStyle} className={Styles.modal}>
                    <Typography variant="h6" component="h2" className={Styles.h3}>
                        {cardData.modalTitle}
                    </Typography>
                    <Typography sx={{ mt: 2 }} className={Styles.p}>
                        {cardData.modalDescription}
                    </Typography>
                    <Button onClick={handleClose}>Fechar</Button>
                </Box>
            </Modal>
        </>
    );
};

export default ImgMediaCard;