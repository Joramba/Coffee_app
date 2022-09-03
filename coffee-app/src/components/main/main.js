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
                <p className="main-text">We makes every day full of energy and taste</p>
                <p className="main-text">Want to try our beans?</p>
                <button className="main-button">More</button>
            </div>
        </section>
    )
}

export default Main;