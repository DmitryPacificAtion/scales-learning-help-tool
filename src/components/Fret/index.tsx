import React, { FC } from 'react';
import { GLOBAL_CONFIG } from '@constants';
import './styles.scss';

export interface IFret {
  id: number;
  key: string;
  zero?: boolean;
  active?: boolean;
}

export const Fret: FC<IFret> = ({ id, active = false, zero = false }) => {
  return (
    <div key={id + 'F'} className={`fret ${zero ? 'zero' : ''}`}>
      <span className={`fret__value ${active && 'fret__value--selected'}`}>{GLOBAL_CONFIG[id].normal}</span>
    </div>
  );
};
