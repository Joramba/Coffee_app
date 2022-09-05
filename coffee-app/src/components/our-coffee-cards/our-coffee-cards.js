import CardOurCoffee from '../card-our-coffee/card-our-coffee';
import './our-coffee-cards.scss';

const OurCoffeeCards = ({ data, img }) => {
    const elemets = data.map(item => {
        const { title, country, price, id } = item;
        console.log(img);
        return (
            <CardOurCoffee key={id} img={img} title={title} country={country} price={price} />
        )
    })

    return (
        <div className="our-coffee-cards">
            {elemets}
        </div>
    )
}

export default OurCoffeeCards;