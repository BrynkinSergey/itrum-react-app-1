import './Layout.scss'
import NavLink from "./components/NavLink/NavLink";
import navlinks from "../../constants/navlinks.constants";

const Layout = () => {

    return <div className={'layout'}>
        <nav className={'layout_navbar'}>
            {navlinks.map(el=> <NavLink key={`navlink-${el.id}`} text={el.text} Icon={el.icon} isSelected={el.text === 'Продукты'}/>)}
        </nav>
        <main className={'layout_content'}></main>
    </div>
}

export default Layout;
