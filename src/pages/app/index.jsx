import { useSelector } from 'react-redux';
import Auth from '../auth';
import Posts from '../posts';

const App = () => {
  const token = useSelector((state) => state?.auth?.token);
  return token ? <Posts /> : <Auth />;
};

export default App;
