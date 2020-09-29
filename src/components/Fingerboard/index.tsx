import React from 'react';
import './styles.scss';
import { StringEntity } from '../String';

const Fingerboard = () => {
    // TODO: Лады вместить в струны, а не наоборот
    return (
        <div className="fingerboard">
            <StringEntity key={0 + 'S'} id={0} />
            <StringEntity key={1 + 'S'} id={1} />
            <StringEntity key={2 + 'S'} id={2} />
            <StringEntity key={3 + 'S'} id={3} />
            <StringEntity key={4 + 'S'} id={4} />
            <StringEntity key={5 + 'S'} id={5} />
        </div>
    );
};

export default Fingerboard;
