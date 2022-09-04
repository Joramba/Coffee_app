import './title.scss';
import Img from "../../img/svg/coffee-beans_black.svg"

const Title = () => {
    return (
        <>
            <div className="title-img-container">
                <img src={Img} alt="Coffee beans" className="title-img" />
            </div>
        </>
    )
};

export default Title;