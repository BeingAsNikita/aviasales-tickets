import React from 'react';
import './Preloader.scss';
import logo from '../../assets/imgs/logo.svg';

const Preloader = ({ tickets }) => {
    return (
    
    <div className="preloader">
        <img src={logo} alt="logo" />
    </div>
    )
}

export default Preloader;
