import React from 'react';
import './styles.scss';
import Flat from '../Flat';

const Fingerboard = () => {
    const flats = new Array(24);

    for(var i = 1, width = 75; i <= 24; i++, width--) {
        flats.push(<Flat key={i} width={width} />)
    }
    return (
        <div className="fingerboard">
            {flats.map(item => item)}
        </div>
    );
}

export default Fingerboard;
