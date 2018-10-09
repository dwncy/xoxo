import React from 'react';
import { compose, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export const enhance = compose(
  setPropTypes({
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  })
);

export default enhance(
  ({ increment, incrementIfOdd, incrementAsync, decrement, counter }) => (
    <View>
      <View>
        <Text>Clicked: {counter} times</Text>
      </View>
      <View>
        <Text onPress={increment}>+</Text>
        <Text onPress={decrement}>-</Text>
        <Text onPress={incrementIfOdd}>Increment if odd</Text>
        <Text onPress={() => incrementAsync()}>Increment async</Text>
      </View>
    </View>
  )
);
