import React, { FC } from 'react';
import './styles.scss';
import String from '../String';

interface IFlat {
  id: number;
  width: number;
  config: any[];
  zero?: boolean;
}

const Flat = ({ id, width, config, zero = false }) => {
  return (
    <div className={`flat ${zero && 'zero'}`} style={zero ? undefined : { width }}>
      {config.map((string, num) => (<String key={`${zero ? 0 : id}F+${num}S`} {...string} />))}
    </div>
  );
};

export default Flat;
