import ImgMediaCard from "@/app/components/card/Card"
import { dataBase } from "@/app/data/dataBase"
const { Grid, Typography, Box } = require("@mui/material")
import Styles from './project.module.css'

const Projects = () => {
    return (
        <Grid id='projects' className={Styles.grid_container}>
            <Box className={Styles.containerTitle}>
                <Typography className={Styles.h2} variant="h2">Projects</Typography>
            </Box>
            <Box className={Styles.containerProjects}>
                {dataBase.map((card) => (
                    <ImgMediaCard key={card.id} cardData={card} />
                ))}
            </Box>
        </Grid>
    )
}

export default Projects  