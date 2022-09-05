import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from "../header/header";
import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import AboutBeans from "../about-beans/about-beans";
import Line from "../line/line";
import OurCoffeeCards from "../our-coffee-cards/our-coffee-cards";
import Footer from "../footer/footer";

import '../app/app.scss';

import BgPleasure from "../../img/bg-Pleasure.jpg";
import AboutPleasureImage from '../../img/img-Pleasure.jpg';
import Card3 from '../../img/card3.jpg';



class PleasurePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99", id: uuidv4() },
                { title: "AROMISTICO Coffee 1 kg", country: "Kenia", price: "6.99", id: uuidv4() },
                { title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99", id: uuidv4() },
                { title: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "6.99", id: uuidv4() },
                { title: "AROMISTICO Coffee 1 kg", country: "Kenia", price: "6.99", id: uuidv4() },
                { title: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "6.99", id: uuidv4() },
            ]
        };
    }


    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <Header />
                <OurCoffeeMain title="For your pleasure" img={BgPleasure} />
                <AboutBeans about="About our goods" img={AboutPleasureImage} />
                <Line />
                <OurCoffeeCards img={Card3} data={data} />
                <Footer />
            </div>
        )
    }

}

export default PleasurePage;