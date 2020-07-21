import React from 'react';
import './styles.scss';
import String from '../String';

const ZeroFlat = ({ config }) => {
    return (
        <div className="zero-flat">
            {
                config.map((string, num) => <String key={`${0}F+${num}S`} string={string.value} />)
            }
        </div>
    );
}

export default ZeroFlat;
