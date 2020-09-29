import React, { FC } from 'react';
import './styles.scss';
import { Fret, IFret } from '../Fret';
import { TOTAL_FRETS, TOTAL_NOTES } from '@constants';

interface IStringEntity {
    id: number;
}

export const StringEntity: FC<IStringEntity> = ({ id }) => {
    const frets = new Array(TOTAL_FRETS);
    for (let i = 0; i <= TOTAL_FRETS; i++) {
        frets.push(<Fret key={id + 'F'} id={(i + id) % TOTAL_NOTES} zero={i === 0} />);
    }

    return <div className="string">{frets.map(fret => fret)}</div>;
};
