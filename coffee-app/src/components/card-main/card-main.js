import './card-main.scss';

const Card = ({ img, title, price }) => {
    return (
        <div className="card">
            <img src={img} alt="Img Card" className='card-img' />
            <h3 className='card-title'>{title}</h3>
            <h3 className='card-price'>{price}$</h3>
        </div>
    )
}

export default Card;