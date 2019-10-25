import React from 'react';
import './styles.scss';

const String = props => {
    return (
        <div className="string">
            {props.name}
        </div>
    );
}

export default String;
