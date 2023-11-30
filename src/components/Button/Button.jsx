import './Button.scss'

const Button = ({text}) => {
    return <button className={'btn'}>
        <p className={'font-size--16 font-line-height--24 font-weight--500 font-color--grayspace-layout-white'}>{text}</p>
    </button>
}

export default Button
