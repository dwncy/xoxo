import { Platform } from 'react-native';

const RouterPackage =
  Platform.OS === 'web'
    ? require('react-router-dom')
    : require('react-router-native');

export const { Link, Route, Redirect, Switch } = RouterPackage;

export const Router =
  Platform.OS === 'web'
    ? RouterPackage.BrowserRouter
    : RouterPackage.NativeRouter;
