import Line from '../line/line';

import './filter.scss';

const Filters = (props) => {
    const btnClass = "filters-button";

    const unActiveClass = () => {
        document.querySelector('.filters-buttons').childNodes.forEach(item => {
            item.className = btnClass;
        })
    }

    const onFilter = (e) => {
        const filter = e.target.name;
        if (e.target.className == 'filters-button active') {
            unActiveClass();
        } else {
            unActiveClass();
            e.target.className = btnClass + " active";
        }
        props.onFilter(filter);
    }

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
                        <button
                            className="filters-button"
                            name='Brazil'
                            onClick={onFilter}>
                            Brazil
                        </button>
                        <button
                            className='filters-button'
                            name='Kenia'
                            onClick={onFilter}>
                            Kenya
                        </button>
                        <button
                            className='filters-button'
                            name='Columbia'
                            onClick={onFilter}>
                            Columbia
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filters;