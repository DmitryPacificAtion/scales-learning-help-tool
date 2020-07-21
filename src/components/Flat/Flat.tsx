import React, { FC } from 'react';
import './styles.scss';
import String from '../String';

interface IFlat {
    id: number;
    width: number;
    flatConfig: any[];
}

const Flat = ({ id, width, config}) => {
    return (
        <div className="flat" style={{ width }}>
            {
                config.map((string, num) => <String key={`${id}F+${num}S`} string={string.value} />)
            }
        </div>
    );
}

export default Flat;
