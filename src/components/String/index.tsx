import React from 'react';
import './styles.scss';
import { Fret, IFrets } from '../Fret';
import { TOTAL_FRETS, CHROMATIC_SCALE } from 'src/constants/global';

interface IStringEntity {
    config: IFrets[];
    id: number;
    width: number;
    zero?: boolean;
    active?: boolean;
    value: string;
}

const frets = new Array(TOTAL_FRETS);
for (var i = 0, width = 76; i <= TOTAL_FRETS; i++, width--) {
    frets.push(<Fret key={i + 'S'} width={width} zero={i === 0} config={CHROMATIC_SCALE} />);
}

export const StringEntity: IStringEntity= ({ id, config }) => (
    <div className="string">
        {config.map((string, num) => (
            <StringEntity key={`${zero ? 0 : id}F+${num}S`} {...string} />
        ))}
        {(id, width, (active = false), (zero = false), value)}
        <div className={`string__value ${active && 'string__value--selected'}`}>{value}</div>
    </div>
);
