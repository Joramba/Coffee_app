import Menu from '../menu/menu.js';
import BeansWhite from '../../img/svg/coffee-beans.svg'
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <Menu color='white' img={BeansWhite} />
        </header>
    )
}

export default Header;