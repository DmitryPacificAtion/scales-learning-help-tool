import { CHANGE_INSTRUMENT_TYPE } from "./actionTypes";
import config from "./config";

const defaultState = {
  instrument: config[0],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_INSTRUMENT_TYPE: {
      const newInstrumentType = config.find((type) => type.id === payload.id);

      if (newInstrumentType) {
        return {
          instrument: newInstrumentType,
        };
      }
      return state;
    }
    default:
      return state;
  }
};
