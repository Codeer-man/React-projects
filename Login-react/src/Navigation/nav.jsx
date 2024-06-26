import Styles from './nav.module.css'
import Logo from './logo.png'

const nav = () => {
    return (
        <div className={Styles.nav}>
            <div className={Styles.logo}>
                <img src={Logo} alt="Logo of do something" />
            </div>
            <div>
                <ul className={Styles.ul}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                </ul>
            </div>

        </div>
    )
}

export default nav
