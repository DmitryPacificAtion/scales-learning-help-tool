import React from 'react';
import './styles.scss';

const String = ({ string }) => {
    return (
        <div className="string">
            {string.value}
        </div>
    );
}

export default String;
