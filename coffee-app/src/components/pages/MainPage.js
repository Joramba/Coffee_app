import { Component } from 'react';

import Header from '../header/header';
import Main from '../main/main';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import '../app/app.scss';

import data from "../../db";


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        };
    }


    render() {
        const { data } = this.state;
        const FavoritesData = data.filter(item => item.favorites);

        return (
            <div className="app">
                <Header />
                <Main />
                <AboutUs />
                <OurBest data={FavoritesData} />
                <Footer />
            </div>
        )
    }
}

export default MainPage;