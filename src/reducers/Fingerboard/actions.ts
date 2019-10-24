import { CHANGE_INSTRUMENT_TYPE } from './actionTypes';

export const onChangeInstrumentType = (id) => ({
    type: CHANGE_INSTRUMENT_TYPE,
    payload: {
        id,
    },
});
