import React from 'react';
import './PriceFilter.scss';

const PriceFilter = ({ type, name, text, onChange, filters }) => {
    return (
        <div className="priceFilter">
            <label className="priceFilter__label" htmlFor="isCheap">
                <input className="visually-hidden" type="radio" name="price" id="isCheap"
                    checked={filters.price === 'isCheap'}
                    onChange={e => onChange(e)} />
                <span className="priceFilter__fake priceFilter__fake--left">Самый дешевый</span>

            </label>

            <label className="priceFilter__label" htmlFor="isFast">
                <input className="visually-hidden" type="radio" name="price" id="isFast"
                    checked={filters.price === 'isFast'}
                    onChange={e => onChange(e)} />
                <span className="priceFilter__fake priceFilter__fake--right"> Самый быстрый</span>

            </label>


        </div>
    )
}

export default PriceFilter;
