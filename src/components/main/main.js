import { Link } from 'react-router-dom';

import './main.scss';
import Img from "../../img/svg/coffee-beans_2.svg"

const Main = () => {
    return (
        <section className="main">
            <div className="main-wrapper">
                <h1 className="main-title">Everything You Love About Coffee</h1>
                <div className="main-img-container">
                    <img src={Img} alt="Coffee beans" className="main-img" />
                </div>
                <h2 className="main-text">We makes every day full of energy and taste</h2>
                <h2 className="main-text">Want to try our beans?</h2>
                <Link to={'/Coffee_app/our_coffee'} className='nav-item-link'><button className="main-button">More</button></Link>
            </div>
        </section>
    )
}

export default Main;