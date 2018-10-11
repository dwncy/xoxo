/**
 * In the future we might use react-navigation for native instead using react-router-native
 * Separate it into each file per platform.
 */
import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'app/utils/routing';

import routes from 'app/routes';

/* eslint-disable */
let App = () => (
  <View style={styles.container}>
    <View style={styles.nav}>
      <Link to="/"><Text>Home</Text></Link>
      <Link to="/counter"><Text>counter</Text></Link>
    </View>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </View>
);

if (Platform.OS !== 'web') {
  const { BackButton } = require('react-router-native');

  App = () => (
    <BackButton>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/"><Text>Home</Text></Link>
          <Link to="/counter"><Text>counter</Text></Link>
        </View>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </View>
    </BackButton>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
