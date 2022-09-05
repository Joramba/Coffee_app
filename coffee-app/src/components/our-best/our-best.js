import Card from '../card-main/card-main';
import Card1 from '../../img/card1.jpg'
import Card2 from '../../img/card2.jpg'
import Card3 from '../../img/card3.jpg'

import './our-best.scss';

const OurBest = () => {
    return (
        <section className='our-best'>
            <h2 className='our-best-title'>Our best</h2>
            <div className="our-best-wrapper">
                <Card img={Card1} title='Solimo Coffee Beans 2 kg' price='10.73' />
                <Card img={Card2} title='Presto Coffee Beans 1 kg' price='15.99' />
                <Card img={Card3} title='AROMISTICO Coffee 1 kg' price='6.99' />
            </div>
        </section>
    )
}

export default OurBest;