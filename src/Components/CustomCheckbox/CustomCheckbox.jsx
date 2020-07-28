import React from 'react';
import './CustomCheckbox.scss';

const CustomCheckbox = ({ type, name, text }) => {
    return (
        <li className="customCheckbox">
            <label className="customCheckbox__label" htmlFor={name}>
                <input className="visually-hidden" type={type} name={name} id={name} />
                <span className="customCheckbox__fake"></span>
                <span>{text}</span>
                </label>
        </li>
    )
}

export default CustomCheckbox;
