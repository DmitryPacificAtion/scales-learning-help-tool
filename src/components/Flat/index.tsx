import React from 'react';
import './styles.scss';
import String from '../String';

const Flat = () => {
    const defaultStrings = [{
        key: 'E',
        value: 'E',
    }, {
        key: 'B',
        value: 'B',
    }, {
        key: 'G',
        value: 'G',
    }, {
        key: 'D',
        value: 'D',
    }, {
        key: 'A',
        value: 'A',
    }, {
        key: 'e',
        value: 'E',
    },
    ];

    return (
        <div className="flat">
            {
                defaultStrings.map(string => <String key={string.value} string={string} />)
            }
        </div>
    );
}

export default Flat;
