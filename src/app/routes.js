import { Home, Counter } from 'app/containers';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/counter',
    component: Counter,
  },
];
