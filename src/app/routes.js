import { Home, Inbox, Account } from 'app/containers';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/inbox',
    component: Inbox,
  },
  {
    path: '/account',
    component: Account,
  },
];
