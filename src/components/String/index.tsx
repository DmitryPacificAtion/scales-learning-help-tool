import React from 'react';
import './styles.scss';
import { Fret, IFret } from '../Fret';
import { TOTAL_FRETS } from '../../constants/global';

interface IStringEntity {
    id: number;
    config: IFret[];
}

const frets = new Array(TOTAL_FRETS);
for (var i = 0; i <= TOTAL_FRETS; i++) {
    frets.push(<Fret key={i + 'S'} zero={i === 0} id={i + 'F'} value={1} />);
}

export const StringEntity: IStringEntity = ({ id, config }) => {
    console.log('StringEntity', config);

    return (
        <div className="string">
            {config.map(({ key, value, active }, num) => (
                <Fret key={key + 'F'} id={id} zero={num === 0} value={value} active={active} />
            ))}
            {/* (id, width, (active = false), (zero = false), value) */}
            {/* <div className={`string__value ${active && 'string__value--selected'}`}>{value}</div> */}
        </div>
    );
};
