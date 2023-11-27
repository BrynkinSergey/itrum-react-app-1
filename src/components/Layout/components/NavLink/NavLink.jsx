import './NavLink.scss'

const NavLink = ({ text, Icon, isSelected = false}) => {
    return <div className={`nav-link${isSelected? ' nav-link--selected': ''}`}>
        <Icon className={`nav-link_icon${isSelected? ' nav-link_icon--selected': ''}`}/>
        <p className={`nav-link_text${isSelected? ' nav-link_text--selected': ''}`}>{text}</p>
    </div>
}

export default NavLink
