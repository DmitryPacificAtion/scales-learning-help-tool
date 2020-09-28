import React, { FC } from 'react';
import './styles.scss';

export interface IFret {
  zero?: boolean;
  active?: boolean;
  value: string;
}

export const Fret = ({ id, active = false, zero = false, value }) => {
  return (
    <div key={id + 'F'} className={`fret ${zero ? 'zero' : ''}`}>
        <span className={`fret__value ${active && 'fret__value--selected'}`}>{value}</span>
    </div>
  );
};
