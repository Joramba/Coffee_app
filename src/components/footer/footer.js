import Menu from '../menu/menu';
import Title from '../title/title';
import Image from "../../img/svg/coffee-beans_white.svg"
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <Menu color="black" img={Image} />
            <Title />
        </footer>
    )
}

export default Footer;