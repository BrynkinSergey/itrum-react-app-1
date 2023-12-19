import {NavLink} from "react-router-dom";
import styles from './style.module.scss'

const CustomNavLink = ({id, text, Icon}) => (
    <NavLink className={({isActive, isPending}) =>
        `${styles.navLink} ${isActive ? styles.active : ''}`} to={id}>
        <Icon/>
        <p className={styles.text}>{text}</p>

    </NavLink>
)

export default CustomNavLink
