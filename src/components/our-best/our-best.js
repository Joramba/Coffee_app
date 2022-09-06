import Card from '../card/card';

import './our-best.scss';

const OurBest = ({ data }) => {
    const elements = data.map(item => {
        const { src, title, price, id } = item;
        return (
            <Card key={id} id={id} img={Object.values(src)} title={title} price={price} />
        )
    });

    return (
        <section className='our-best'>
            <h2 className='our-best-title'>Our best</h2>
            <div className="our-best-wrapper">
                {elements}
            </div>
        </section>
    )
}

export default OurBest;