import './Layout.scss'
import {Route, Routes} from "react-router-dom";
import CustomNavLink from "./components/CustomNavLink/CustomNavLink";
import navlinks from "../../constants/navlinks.constants";
import PromotionPage from "../../pages/PromotionPage/PromotionPage";

const Layout = () =>
    (<div className={'layout'}>
        <nav className={'layout_navbar'}>
            {navlinks.map(el => <CustomNavLink key={`navlink-${el.id}`} id={el.id} text={el.text} Icon={el.icon}/>)}
        </nav>
        <main className={'layout_content'}>
            <Routes>
                <Route index element={<></>}/>
                <Route path={'products'} element={<div>Products</div>}/>
                <Route path={'users'} element={<div>users</div>}/>
                <Route path={'categories'} element={<div>categories</div>}/>
                <Route path={'cities'} element={<div>cities</div>}/>
                <Route path={'brands'} element={<div>brands</div>}/>
                <Route path={'protocols'} element={<div>protocols</div>}/>
                <Route path={'orders'} element={<div>orders</div>}/>
                <Route path={'banners'} element={<div>banners</div>}/>
                <Route path={'seminars'} element={<div>seminars</div>}/>
                <Route path={'promotions'} element={<PromotionPage/>}/>
            </Routes>
        </main>
    </div>)


export default Layout;
