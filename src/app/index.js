/**
 * In the future we might use react-navigation for native instead using react-router-native
 * Separate it into each file per platform.
 */
import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'app/utils/routing';

import routes from 'app/routes';

const navItem = {
  flex: 1,
  padding: 10,
  alignItems: 'center',
};

/* eslint-disable */
let App = () => (
  <View>
    <View style={styles.nav}>
      <Link to="/" style={navItem} replace><Text>Home</Text></Link>
      <Link to="/inbox" style={navItem} replace><Text>Inbox</Text></Link>
      <Link to="/account" style={navItem} replace><Text>Akun</Text></Link>
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
      <View>
        <View style={styles.nav}>
          <Link to="/" style={styles.navItem} replace><Text>Home</Text></Link>
          <Link to="/inbox" style={styles.navItem} replace><Text>Inbox</Text></Link>
          <Link to="/account" style={styles.navItem} replace><Text>Akun</Text></Link>
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
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem,
});

export default App;
