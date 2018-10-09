import { apiUrl } from 'app/utils/url';

const SET_COUNTER = 'SET_COUNTER';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export default function reducer(state = 0, action) {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export const getCounter = () => async (dispatch) => {
  try {
    const response = await fetch(apiUrl(`/api/counter`), {
      accept: 'application/json',
    });
    const { counter } = await response.json();
    dispatch(set(counter));
  } catch (err) {
    dispatch(set(NaN));
  }
};

export const set = (value) => ({
  type: SET_COUNTER,
  payload: value,
});

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
};

export const incrementAsync = (delay = 1000) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};

export const getCounterSelector = (state) => state.counter;
