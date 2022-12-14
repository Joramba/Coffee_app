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

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            term: '',
            filter: 'all'
        }
    }

    filterData = (data, filter) => {
        switch (filter) {
            case 'Brazil':
                return data.filter(item => item.country === "Brazil")
            case 'Kenia':
                return data.filter(item => item.country === "Kenia")
            case 'Columbia':
                return data.filter(item => item.country === "Columbia")
            default:
                return data;
        }
    }

    termData = (data, term) => {
        return data.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onFilter = (filter) => {
        if (this.state.filter === filter) {
            this.setState({ filter: 'all' })
        } else {
            this.setState({ filter })
        }
    }

    render() {
        const { data, filter, term } = this.state;
        const filtereddData = this.filterData(data, filter);
        const termFilteredData = this.termData(filtereddData, term);

        console.log(filtereddData);
        return (
            <div className="app">
                <Header />
                <OurCoffeeMain title="Our Coffee" img={BgOurCoffee} />
                <AboutBeans about="About our beans" img={AboutBeansImage} data={data} single={false} />
                <Filters onFilter={this.onFilter} onUpdateSearch={this.onUpdateSearch} />
                <OurCoffeeCards data={termFilteredData} />
                <Footer />
            </div>
        )
    }
}

export default OurCoffee;