import ACTIONS from 'actions';

const INITIAL_STATE = {
  lastUpdate: 0,
  light: false,
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light,
      };

    case ACTIONS.ADD:
      return {
        ...state,
        count: state.count + 1,
      };

    default: return state;
  }
};
