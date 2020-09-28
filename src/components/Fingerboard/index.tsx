import React from 'react';
import './styles.scss';
import { StringEntity } from '../String';
import { CHROMATIC_SCALE } from '../../constants/global';

const Fingerboard = () => {
    // TODO: Лады вместить в струны, а не наоборот
    return (
        <div className="fingerboard">
            <StringEntity key={0 + 'S'} id={0 + 'S'} config={CHROMATIC_SCALE} />
            <StringEntity key={1 + 'S'} id={1 + 'S'} config={CHROMATIC_SCALE} />
            <StringEntity key={2 + 'S'} id={2 + 'S'} config={CHROMATIC_SCALE} />
            <StringEntity key={3 + 'S'} id={3 + 'S'} config={CHROMATIC_SCALE} />
            <StringEntity key={4 + 'S'} id={4 + 'S'} config={CHROMATIC_SCALE} />
            <StringEntity key={5 + 'S'} id={5 + 'S'} config={CHROMATIC_SCALE} />
        </div>
    );
};

export default Fingerboard;
