import './CustomNavLink.scss'
import {NavLink} from "react-router-dom";

const CustomNavLink = ({id, text, Icon}) => (
    <NavLink className={({isActive, isPending}) =>
        `nav-link ${isActive ? "nav-link--active font-color--grayspace-layout-white" : " font-color--black"}`} to={id}>
        <Icon className={`nav-link_icon`}/>
        {/*todo заменить nav-link_text на классы из fonts.scss */}
        <p className={'font-size--14 font-line-height--20 font-weight--500'}>{text}</p>

    </NavLink>
)

export default CustomNavLink
