import './CustomNavLink.scss'
import {NavLink} from "react-router-dom";

const CustomNavLink = ({id, text, Icon}) => (
    <NavLink className={({isActive, isPending}) =>
        isActive ? "nav-link--active" : "nav-link"} to={id}>
        <Icon className={`nav-link_icon`}/>
        <p className={`nav-link_text`}>{text}</p>
    </NavLink>
)


export default CustomNavLink
