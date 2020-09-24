import React, { FC } from 'react';
import './styles.scss';

export interface IFret {
  id: number;
  width: number;
  zero?: boolean;
  active?: boolean;
  value: string;
}

export const Fret = ({ id, width, active = false, zero = false, value }) => {
  return (
    <div key={id + 'F'} className={`fret ${zero && 'zero'}`} style={zero ? undefined : { width }}>
        <span className={`fret__value ${active && 'fret__value--selected'}`}>{value}</span>
    </div>
  );
};
