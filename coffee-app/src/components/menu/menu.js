import './menu.scss'

const Menu = ({ color, img }) => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <img src={img} alt="Beans" className='nav-img'/>
                    <a href="#!" className='nav-item-link' style={{ color: color }}>Coffee house</a>
                </li>
                <li className='nav-item'>
                    <a href="#!" className='nav-item-link' style={{ color: color }}>Our coffee</a>
                </li>
                <li className='nav-item'>
                    <a href="#!" className='nav-item-link'  style={{ color: color }}>For your pleasure</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;