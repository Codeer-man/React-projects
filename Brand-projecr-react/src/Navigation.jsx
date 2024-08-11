import Logo from './assets/logo.jpg'
import './App.css'

function Nav() {

    return (
        <>

            <nav className="navigation">
                
                <div>
                    <img src={Logo} alt="logo" className='logo' />
                </div>
                <ul className='nav'>
                    <li>Menu </li>
                    <li>Location </li>
                    <li>Contact </li>
                    <li>About</li>
                </ul>
                <button className='log-btn'> Login</button>
            </nav>
        </>
    );
}
export default Nav