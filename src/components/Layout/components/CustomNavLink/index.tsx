import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'
import { type INavLink } from '../../../../types/INavLink'

const CustomNavLink = ({ id, text, Icon }: INavLink) => (
  <NavLink className={({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ''}`} to={id}>
    <Icon/>
    <p className={styles.text}>{text}</p>

  </NavLink>
)

export default CustomNavLink
