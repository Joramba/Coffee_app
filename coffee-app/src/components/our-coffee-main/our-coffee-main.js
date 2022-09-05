import './our-coffee-main.scss';

const OurCoffeeMain = (props) => {
    const { title, img } = props;
    return (
        <section className="ourcoffee-main" style={{ background: `url(${img}) no-repeat center` }}>
            <div className="ourcoffee-main-wrapper">
                <h1 className="ourcoffee-main-title">{title}</h1>
            </div>
        </section>
    )
}

export default OurCoffeeMain;