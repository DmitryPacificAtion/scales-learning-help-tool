import React from 'react';
import './styles.scss';

const String = ({ string }) => {
    return (
        <div className="string">
            <span className="string__value">{string}</span>
        </div>
    );
}

export default String;
