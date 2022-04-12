import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return <footer>
        <ul className={styles.social_list}>
            <li><FaGithub/></li>
            <li><FaLinkedin/></li>
            <li><FaInstagram/></li>
        </ul>
        <p>Nosso rodapé</p>
        </footer>
}

export default Footer;