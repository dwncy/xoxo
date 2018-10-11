import Loadable from 'react-loadable';
import { Loading } from 'app/components';

export default Loadable({
  loader: () => import('./index'),
  loading: Loading,
});
