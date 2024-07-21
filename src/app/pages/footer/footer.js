import Styles from './footer.module.css'
import { Typography } from '@mui/material'


const Footer = () => {
    return (
        <footer className={Styles.containerFooter}>
            <Typography className={Styles.copy}>© 2024 Washington Lemos. Todos os direitos reservados.</Typography>
        </footer>
    )
}
export default Footer