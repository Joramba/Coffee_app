import Line from '../line/line';

import './filter.scss';

const Filters = () => {
    return (
        <>
            <Line />
            <section className="filters">
                <div className="filters-container">
                    <div className="filters-input-text">
                        Lookiing for
                    </div>
                    <div className="filters-input">
                        <input type="text" placeholder='start typing here...' />
                    </div>
                </div>
                <div className="filters-container">
                    <div className="filters-input-text">
                        Or filter
                    </div>
                    <div className="filters-buttons">
                        <button className='filters-button'>Brazil</button>
                        <button className='filters-button'>Kenya</button>
                        <button className='filters-button'>Columbia</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filters;