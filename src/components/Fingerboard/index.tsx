import React from 'react';
import './styles.scss';
import StringEntity from '../String';
import { CHROMATIC_SCALE } from '../../constants/global';

const Fingerboard = () => {
    // TODO: Лады вместить в струны, а не наоборот
    return (
        <div className="fingerboard">
            <StringEntity key={0 + 'S'} />
            <StringEntity key={1 + 'S'} />
            <StringEntity key={2 + 'S'} />
            <StringEntity key={3 + 'S'} />
            <StringEntity key={4 + 'S'} />
            <StringEntity key={5 + 'S'} />
        </div>
    );
};

export default Fingerboard;
