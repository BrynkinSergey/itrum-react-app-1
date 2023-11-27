import './Layout.scss'
import NavLink from "./components/NavLink/NavLink";
import navlinks from "../../constants/navlinks.constants";
import {Outlet, useParams} from "react-router-dom";

const Layout = () => {

    const {id} = useParams()

    return <div className={'layout'}>
        <nav className={'layout_navbar'}>
            {navlinks.map(el=> <NavLink key={`navlink-${el.id}`} id={el.id} text={el.text} Icon={el.icon} isSelected={el.id === id}/>)}
        </nav>
        <main className={'layout_content'}>
            <Outlet/>
        </main>
    </div>
}

export default Layout;
