import {ReactComponent as ProductIcon} from '../images/icons/navbar/Products.svg'
import {ReactComponent as BannersIcon} from '../images/icons/navbar/Banners.svg'
import {ReactComponent as BrandsIcon} from '../images/icons/navbar/Brands.svg'
import {ReactComponent as CategoriesIcon} from '../images/icons/navbar/Categories.svg'
import {ReactComponent as CitiesIcon} from '../images/icons/navbar/Cities.svg'
import {ReactComponent as OrdersIcon} from '../images/icons/navbar/Orders.svg'
import {ReactComponent as PromoCodesIcon} from '../images/icons/navbar/Promocodes.svg'
import {ReactComponent as ProtocolsIcon} from '../images/icons/navbar/Protocols.svg'
import {ReactComponent as SeminarsIcon} from '../images/icons/navbar/Seminars.svg'
import {ReactComponent as UsersIcon} from '../images/icons/navbar/Users.svg'

const navLinks = [
    {
        id: 'products',
        text: 'Продукты',
        icon: ProductIcon
    },
    {
        id: 'users',
        text: 'Пользователи',
        icon: UsersIcon
    },
    {
        id: 'categories',
        text: 'Категории',
        icon: CategoriesIcon
    },
    {
        id: 'cities',
        text: 'Города',
        icon: CitiesIcon
    },
    {
        id: 'brands',
        text: 'Бренды',
        icon: BrandsIcon
    },
    {
        id: 'protocols',
        text: 'Протоколы',
        icon: ProtocolsIcon
    },
    {
        id: 'orders',
        text: 'Заказы',
        icon: OrdersIcon
    },
    {
        id: 'banners',
        text: 'Баннеры',
        icon: BannersIcon
    },
    {
        id: 'seminars',
        text: 'Семинары',
        icon: SeminarsIcon
    },
    {
        id: 'promotions',
        text: 'Акции',
        icon: PromoCodesIcon
    },
]

export default navLinks
