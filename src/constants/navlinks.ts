import { ReactComponent as ProductIcon } from '../images/icons/navbar/Products.svg'
import { ReactComponent as BannersIcon } from '../images/icons/navbar/Banners.svg'
import { ReactComponent as BrandsIcon } from '../images/icons/navbar/Brands.svg'
import { ReactComponent as CategoriesIcon } from '../images/icons/navbar/Categories.svg'
import { ReactComponent as CitiesIcon } from '../images/icons/navbar/Cities.svg'
import { ReactComponent as OrdersIcon } from '../images/icons/navbar/Orders.svg'
import { ReactComponent as PromoCodesIcon } from '../images/icons/navbar/Promocodes.svg'
import { ReactComponent as ProtocolsIcon } from '../images/icons/navbar/Protocols.svg'
import { ReactComponent as SeminarsIcon } from '../images/icons/navbar/Seminars.svg'
import { ReactComponent as UsersIcon } from '../images/icons/navbar/Users.svg'

import { type INavLink } from '../types/INavLink'

export const navLinks: INavLink[] = [
  {
    id: 'products',
    text: 'Продукты',
    Icon: ProductIcon
  },
  {
    id: 'users',
    text: 'Пользователи',
    Icon: UsersIcon
  },
  {
    id: 'categories',
    text: 'Категории',
    Icon: CategoriesIcon
  },
  {
    id: 'cities',
    text: 'Города',
    Icon: CitiesIcon
  },
  {
    id: 'brands',
    text: 'Бренды',
    Icon: BrandsIcon
  },
  {
    id: 'protocols',
    text: 'Протоколы',
    Icon: ProtocolsIcon
  },
  {
    id: 'orders',
    text: 'Заказы',
    Icon: OrdersIcon
  },
  {
    id: 'banners',
    text: 'Баннеры',
    Icon: BannersIcon
  },
  {
    id: 'seminars',
    text: 'Семинары',
    Icon: SeminarsIcon
  },
  {
    id: 'promotions',
    text: 'Акции',
    Icon: PromoCodesIcon
  }
]

export default { navLinks }
