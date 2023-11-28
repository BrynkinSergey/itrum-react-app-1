import './Button.scss'

const Button = ({text}) => {
    return <button
        className={'btn'}
    >
        <p className={'btn_text'}>{text}</p>
    </button>
}

export default Button
