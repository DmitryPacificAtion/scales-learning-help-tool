import React from 'react';
import './styles.scss';

const String = ({ value, active }) => (
    <div className="string">
        <span className={`string__value ${active && 'string__value--selected'}`}>{value}</span>
    </div>
)

export default String;
