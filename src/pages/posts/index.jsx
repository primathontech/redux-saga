import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';

const Posts = () => {
  const user = useSelector((state) => state?.auth?.user);
  const dispatch = useDispatch();

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />
      <h2 className='text-center mt-32'>Welcome to the posts page!</h2>;
    </>
  );
};

export default Posts;
