import './card.scss';

const Card = ({ img, title, country, price }) => {
    return (
        <a href="/id" className="card-coffee">
            <div className="card">
                <img src={img} alt="Img Card" className='card-img' />
                <h3 className='card-title'>{title}</h3>
                <h3 className='card-country'>{country}</h3>
                <h3 className='card-price'>{price}$</h3>
            </div>
        </a>
    )
};

export default Card;