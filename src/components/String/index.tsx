import React from 'react';
import './styles.scss';

const String = ({ string }) => {
    return (
        <div className="string">
            <span className="string--value">{string.value}</span>
        </div>
    );
}

export default String;
