import { useParams } from 'react-router-dom';

import '../app/app.scss';
import Header from "../header/header";
import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import AboutBeans from '../about-beans/about-beans';
import Footer from '../footer/footer';
import data from "../../db";

import BgOurCoffee from '../../img/bg-OurCoffee.jpg';

const SingleCoffeePage = () => {
    const { id } = useParams();
    const itemData = data.filter(item => item.id === id);

    return (
        <div className="app" >
            <Header />
            <OurCoffeeMain title="Our Coffee" img={BgOurCoffee} />
            <AboutBeans about="About it" img={Object.values(itemData[0].src)} data={itemData[0]} single={true} />
            <Footer />
        </div>
    )
};

export default SingleCoffeePage;
