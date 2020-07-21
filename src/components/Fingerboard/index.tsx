import React from 'react';
import './styles.scss';
import { Flat, ZeroFlat } from '../Flat';
import { GLOBAL_CONFIG } from '../../constants/global';

const TOTAL_FRETS = 24;
const zeroFlat = [
  {
    key: 4,
    value: GLOBAL_CONFIG[4].normal,
  },
  {
    key: 11,
    value: GLOBAL_CONFIG[11].normal,
  },
  {
    key: 7,
    value: GLOBAL_CONFIG[7].normal,
  },
  {
    key: 2,
    value: GLOBAL_CONFIG[2].normal,
  },
  {
    key: 9,
    value: GLOBAL_CONFIG[9].normal,
  },
  {
    key: 4,
    value: GLOBAL_CONFIG[4].normal,
  },
];

const Fingerboard = () => {
  const flats = new Array(TOTAL_FRETS);
  var i = 1;
  const flatConfig = zeroFlat.map(param => ({
    key: (i % 11) + param.key,
    value: GLOBAL_CONFIG[(i % 11) + param.key].normal,
  }));
  console.log('flatConfig', flatConfig);
  
  for (var width = 75; i <= TOTAL_FRETS; i++, width--) {
    flats.push(<Flat key={i} id={i} width={width} config={flatConfig} />);
  }
  return (
    <div className="fingerboard">
      <ZeroFlat config={zeroFlat} />
      {flats.map(item => item)}
    </div>
  );
};

export default Fingerboard;
