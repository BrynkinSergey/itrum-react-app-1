import styles from './style.module.scss'
import { Route, Routes } from 'react-router-dom'
import CustomNavLink from './components/CustomNavLink'
import navLinks from '../../constants/navlinks'
import PromotionPage from '../../pages/PromotionPage'
import ClientsPage from '../../pages/ClientsPage'
import CategoriesPage from '../../pages/CategoriesPage'
import { routes } from '../../constants/routes'

const Layout = () =>
  (<div className={styles.layout}>
    <nav className={styles.navbar}>
      {navLinks.map(el => <CustomNavLink key={`navlink-${el.id}`} id={el.id} text={el.text} Icon={el.Icon}/>)}
    </nav>
    <main className={styles.content}>
      <Routes>
        <Route index element={<></>}/>
        <Route path={routes.products} element={<div>Products</div>}/>
        <Route path={routes.users} element={<ClientsPage/>}/>
        <Route path={routes.categories} element={<CategoriesPage/>}/>
        <Route path={routes.cities} element={<div>cities</div>}/>
        <Route path={routes.brands} element={<div>brands</div>}/>
        <Route path={routes.protocols} element={<div>protocols</div>}/>
        <Route path={routes.orders} element={<div>orders</div>}/>
        <Route path={routes.banners} element={<div>banners</div>}/>
        <Route path={routes.seminars} element={<div>sections</div>}/>
        <Route path={routes.promotions} element={<PromotionPage/>}/>
      </Routes>
    </main>
  </div>)

export default Layout
