import './NavLink.scss'
import {Link} from "react-router-dom";

const NavLink = ({id, text, Icon, isSelected = false}) => {
    return<Link className={'nav-link_wrapper'} to={id}>
        <div className={`nav-link${isSelected? ' nav-link--selected': ''}`}>
            <Icon className={`nav-link_icon${isSelected? ' nav-link_icon--selected': ''}`}/>
            <p className={`nav-link_text${isSelected? ' nav-link_text--selected': ''}`}>{text}</p>
        </div>
    </Link>
}

export default NavLink
