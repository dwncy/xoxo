import React from 'react';
import { Link } from 'utils/routing';

import { StyleSheet, Text, View } from 'react-native';

const Home = () => (
  <View style={styles.box}>
    <Text style={styles.text}>Hello, world!</Text>
    <Link to="/counter">
      <Text>Counter</Text>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' },
});

export default Home;
