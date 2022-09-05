import { Component } from 'react';

import '../app/app.scss';
import Header from "../header/header";
import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import AboutBeans from '../about-beans/about-beans';
import Footer from '../footer/footer';
import data from "../../db";

import BgOurCoffee from '../../img/bg-OurCoffee.jpg';
import AboutBeansImage from '../../img/img-singleCoffee.jpg';


class SingleCoffeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        };
    }

    render() {
        return (
            <div className="app" >
                <Header />
                <OurCoffeeMain title="Our Coffee" img={BgOurCoffee} />
                <AboutBeans about="About it" img={AboutBeansImage} data={data} single={true} />
                <Footer />
            </div>
        )
    }
};

export default SingleCoffeePage;