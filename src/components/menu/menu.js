import { Link } from 'react-router-dom';
import './menu.scss'

const Menu = ({ color, img }) => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <img src={img} alt="Beans" className='nav-img' />
                    <Link to={'/Coffee_app/'} className='nav-item-link' style={{ color: color }}>Coffee house</Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/Coffee_app/our_coffee'} className='nav-item-link' style={{ color: color }}>Our coffee</Link>
                </li>
                <li className='nav-item'>
                    <Link to={'/Coffee_app/pleasure'} className='nav-item-link' style={{ color: color }}>For your pleasure</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;