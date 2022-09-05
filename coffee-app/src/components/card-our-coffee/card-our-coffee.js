import './card-our-coffee.scss';

const CardOurCoffee = ({ img, title, country, price }) => {
    return (
        <div className="our-coffee-card">
            <img src={img} alt="Img Card" className='our-coffee-card-img' />
            <h3 className='our-coffee-card-title'>{title}</h3>
            <h3 className='our-coffee-card-country'>{country}</h3>
            <h3 className='our-coffee-card-price'>{price}$</h3>
        </div>
    )
};

export default CardOurCoffee;