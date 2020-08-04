import React from 'react';
import './styles.scss';
import Flat from '../Flat';
import { TOTAL_FRETS, CHROMATIC_SCALE } from '../../constants/global';

const Fingerboard = () => {
     // TODO: Лады вместить в струны, а не наоборот
    const flats = new Array(TOTAL_FRETS);
    for (var i = 0, width = 76; i <= TOTAL_FRETS; i++, width--) {
        flats.push(<Flat key={i + 'F'} id={i} width={width} zero={i === 0} config={CHROMATIC_SCALE} />);
    }
    return <div className="fingerboard">{flats.map(item => item)}</div>;
};

export default Fingerboard;
