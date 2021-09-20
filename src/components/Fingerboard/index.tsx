import React from 'react';
import './styles.scss';
import { Fret, IFret } from '../Fret';
import { TOTAL_FRETS, FRET_WIDTH, CHROMATIC_SCALE } from '../../constants/global';

const frets = new Array();
for (var i = 0, width = FRET_WIDTH; i <= TOTAL_FRETS; i++, width--) {
  frets.push({
    width,
    zero: i === 0
  } as IFret);
}

const Fingerboard = () => (
  <div className="fingerboard">
    {frets.map((data, index) => (
      <Fret
        key={index + 'F'}
        id={index + 'F'}
        config={CHROMATIC_SCALE}
        {...data}
      />))}
  </div>
);

export default Fingerboard;
