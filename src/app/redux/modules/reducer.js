import { combineReducers } from 'redux';

import counter from 'app/redux/modules/counter';

/* eslint-disable */

export const K_SYSTEM_RESET_STORE = 'K_SYSTEM_RESET_STORE';

const rootReducer = combineReducers({
  counter,
});

export default function appReducer(state, action) {
  return (state, action) => {
    if (action.type === K_SYSTEM_RESET_STORE) state = undefined;

    return rootReducer(state, action);
  };
}
