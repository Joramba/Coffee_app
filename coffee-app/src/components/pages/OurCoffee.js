import Header from "../header/header";
import OurCoffeeMain from "../our-coffee-main/our-coffee-main";
import AboutBeans from "../about-beans/about-beans";

const OurCoffee = () => {
    return (
        <div className="app">
            <Header />
            <OurCoffeeMain />
            <AboutBeans />
        </div>
    )
}

export default OurCoffee;