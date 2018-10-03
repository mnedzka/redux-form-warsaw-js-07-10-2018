import ACTIONS from 'actions';

export const serverRenderClock = isServer => dispatch => {
  return dispatch({
    type: ACTIONS.TICK,
    light: !isServer,
    ts: Date.now(),
  });
};

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({
    type: ACTIONS.TICK,
    light: true,
    ts: Date.now(),
  }), 1000);
};

export const addCount = () => dispatch => {
  return dispatch({ type: ACTIONS.ADD });
};
