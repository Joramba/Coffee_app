import { Link } from 'react-router-dom';

import './card.scss';

const Card = ({ img, title, country, price, id }) => {

    return (
        <Link to={`/${id}`} className="card-coffee">
            <div className="card">
                <img src={img} alt="Img Card" className='card-img' />
                <h3 className='card-title'>{title}</h3>
                <h3 className='card-country'>{country}</h3>
                <h3 className='card-price'>{price}$</h3>
            </div>
        </Link>
    )
};

export default Card;