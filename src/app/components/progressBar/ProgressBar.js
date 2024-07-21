import { Box, Typography } from '@mui/material'
import Styles from './progressBar.module.css'

const ProgressBar = ({ title, percentage, color }) => {
    return (
        <Box className={Styles.container}>
            <Box className={Styles.containerText}>
                <Typography>{title}</Typography>
                <Typography>{percentage}</Typography>
            </Box>
            <Box className={Styles.containerProgress}>
                <Box className={Styles.progress} sx={{ width: `${percentage}`, backgroundColor: `${color}` }}></Box>
            </Box>
        </Box>
    )
}

export default ProgressBar