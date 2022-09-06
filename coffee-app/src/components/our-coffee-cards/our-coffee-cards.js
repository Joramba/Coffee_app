import Card from '../card/card';
import './our-coffee-cards.scss';

const OurCoffeeCards = ({ data}) => {
    const elemets = data.map(item => {
        const { title, country, price, id, src } = item;
        return (
            <Card key={id} img={Object.values(src)} title={title} country={country} price={price} id={id}/>
        )
    })

    return (
        <div className="our-coffee-cards">
            {elemets}
        </div>
    )
}

export default OurCoffeeCards;