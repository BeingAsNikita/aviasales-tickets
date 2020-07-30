import React from 'react';
import './CustomCheckbox.scss';

const CustomCheckbox = ({ type, name, text, filters, onChange }) => {

   /*  console.log(filters)
    console.log(filters[name] + ' ' + name) */

    return (
        <li className="customCheckbox">
            <label className="customCheckbox__label" htmlFor={name}>
                <input className="visually-hidden" type={type} 
                name={name} id={name} 
                onChange={e => onChange(e)}
                checked={filters[name]}/>
                <span className="customCheckbox__fake"></span>
                <span>{text}</span>
                </label>
        </li>
    )
}

export default CustomCheckbox;
