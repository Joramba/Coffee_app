import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <nav className='header-nav'>
                <ul className='header-list'>
                    <li className='header-item'>
                        <a href="#!" className='header-item-link'>Coffee house</a>
                    </li>
                    <li className='header-item'>
                        <a href="#!" className='header-item-link'>Our coffee</a>
                    </li>
                    <li className='header-item'>
                        <a href="#!" className='header-item-link'>For your pleasure</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;