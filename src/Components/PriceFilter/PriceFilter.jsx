import React from 'react';
import './PriceFilter.scss';

const PriceFilter = ({ type, name, text }) => {
    return (
        <div className="priceFilter">
            <label className="priceFilter__label" htmlFor="low">
                <input className="visually-hidden" type="radio" name="price" id="low" />
                <span className="priceFilter__fake priceFilter__fake--left">Самый дешевый</span>

            </label>

            <label className="priceFilter__label" htmlFor="fast">
                <input className="visually-hidden" type="radio" name="price" id="fast" />
                <span className="priceFilter__fake priceFilter__fake--right"> Самый быстрый</span>

            </label>


        </div>
    )
}

export default PriceFilter;
