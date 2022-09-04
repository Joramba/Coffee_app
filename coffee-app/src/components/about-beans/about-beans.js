import Title from '../title/title';

import AboutBeansImage from '../../img/AboutBeans.jpg';
import './about-beans.scss';

const AboutBeans = () => {
    return (
        <section className="about-beans">
            <div className="about-beans-container">
                <img src={AboutBeansImage} alt="About Beans" />
                <div className="about-beans-wrapper">
                    <h2 className="about-beans-title">About our beans</h2>
                    <Title />
                    <div className="about-beans-text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/> <br />
                        Afraid at highly months do things on at. Situation <br />recommend objection do intention<br />
                        so questions.<br />
                        As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                        met spot shy want. Children me laughing we <br />prospect answered followed. At it went<br />
                        is song that held help face.
                    </div>
                </div>
            </div>

        </section >
    )
}

export default AboutBeans;