import '../assets/button.css';
const Button = props => {
    return (
        <input type='button'
        className={props.className}
        value={props.label}
        onClick = {props.handleClick}
        />
    )
}
export default Button;