import { Component } from "react";

import Header from "../header/header";
import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import AboutBeans from "../about-beans/about-beans";
import Filters from "../filters/filters";
import OurCoffeeCards from "../our-coffee-cards/our-coffee-cards";
import Footer from "../footer/footer";
import '../app/app.scss';
import data from "../../db";

import BgOurCoffee from '../../img/bg-OurCoffee.jpg';
import AboutBeansImage from '../../img/AboutBeans.jpg';
import Card3 from '../../img/card3.jpg';

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div className="app">
                <Header />
                <OurCoffeeMain title="Our Coffee" img={BgOurCoffee} />
                <AboutBeans about="About our beans" img={AboutBeansImage} single={false} />
                <Filters />
                <OurCoffeeCards img={Card3} data={data} />
                <Footer />
            </div>
        )
    }
}

export default OurCoffee;