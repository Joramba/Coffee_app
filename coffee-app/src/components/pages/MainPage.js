import Header from '../header/header';
import Main from '../main/main';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

const MainPage = () => {
    return (
        <div className="app">
            <Header />
            <Main />
            <AboutUs />
            <OurBest />
            <Footer />
        </div>
    )

}

export default MainPage;