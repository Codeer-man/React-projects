import Styles from './body.module.css'

function Button({ isOutline,icon,text,...rest}) {
    return (
        <div >
            <button {...rest} className={isOutline ? Styles.outline_btn: Styles.btn}>
                {icon}
                {text}
            </button>
        </div>
    );
}
export default Button