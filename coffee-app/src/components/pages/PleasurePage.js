import { Component } from "react";

import Header from "../header/header";
import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import AboutBeans from "../about-beans/about-beans";
import Line from "../line/line";
import OurCoffeeCards from "../our-coffee-cards/our-coffee-cards";
import Footer from "../footer/footer";
import data from "../../db";

import '../app/app.scss';

import BgPleasure from "../../img/bg-Pleasure.jpg";
import AboutPleasureImage from '../../img/img-Pleasure.jpg';
import Card3 from '../../img/card3.jpg';



class PleasurePage extends Component {
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
                <OurCoffeeMain title="For your pleasure" img={BgPleasure} />
                <AboutBeans about="About our goods" img={AboutPleasureImage} single={false} />
                <Line />
                <OurCoffeeCards img={Card3} data={data} />
                <Footer />
            </div>
        )
    }

}

export default PleasurePage;