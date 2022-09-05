import './about-info.scss';

const AboutInfo = (props) => {
    const { country, description, price } = props.data[0];
    return (
        <div className="about-beans-text">
            <div><b>Country:</b> {country}</div>
            <div><b>Description: </b>{description}</div >
            <div><b> Price:</b> <span>{price}$</span></div>
        </div >
    )
}

export default AboutInfo;