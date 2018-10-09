/**
 * In the future we might use react-navigation for native instead using react-router-native
 * Separate it into each file per platform.
 */
import React from 'react';
import { Platform } from 'react-native';
import { Route, Switch } from 'react-router-dom';

import routes from 'app/routes';

/* eslint-disable */
let App = () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>
);

if (Platform.OS !== 'web') {
  const { BackButton } = require('react-router-native');

  App = () => (
    <BackButton>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </BackButton>
  );
}

export default App;
