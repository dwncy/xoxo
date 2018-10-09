import { connect } from 'react-redux';
import { Counter } from 'app/components';
import {
  getCounterSelector,
  getCounter,
  increment,
  incrementIfOdd,
  incrementAsync,
  decrement,
} from 'app/redux/modules/counter';

const CounterWrapped = connect(
  (state) => ({
    counter: getCounterSelector(state),
  }),
  { increment, incrementIfOdd, incrementAsync, decrement }
)(Counter);

CounterWrapped.fetchData = (store) => {
  if (__CLIENT__) return [];

  const promises = [];
  promises.push(store.dispatch(getCounter()));
  return Promise.all(promises);
};

export default CounterWrapped;
