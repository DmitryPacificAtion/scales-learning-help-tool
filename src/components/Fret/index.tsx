import React from 'react';
import { StringEntity, IStringEntity } from '../String';
import './styles.scss';

export interface IFret {
  id: string;
  config: IStringEntity[];
  width: number;
  zero: boolean;
}

export const Fret = ({ id, width, config, zero}) => (
  <div className={`fret ${zero && 'zero'}`} style={zero ? undefined : { width }}>
    {config.map(({ value, active }) => (
      <StringEntity key={id+'S'} value={value} active={active} />
  ))}
  </div>
);
