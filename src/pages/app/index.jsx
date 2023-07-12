import { useSelector } from 'react-redux';
import Auth from '../auth';
import Posts from '../posts';
import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Users from '../users';
import Products from '../products';
import CreatePost from '../posts/CreatePost';
import EditPost from '../posts/EditPost';
import EditUser from '../users/EditUser';
import CreateUser from '../users/CreateUser';
import EditProduct from '../products/EditProduct';
import CreateProduct from '../products/CreateProduct';

const App = () => {
  const token = useSelector((state) => state?.auth?.token);

  return (
    <Routes>
      <Route exact path='/' index element={<Home />} />

      <Route exact path='/posts' element={<Posts />} />
      {/* 
      /posts/1/edit
      /posts/2/edit
      /posts/3/edit
      /posts/400000/edit
      */}
      <Route exact path='/posts/:postId/edit' element={<EditPost />} />
      <Route exact path='/posts/create' element={<CreatePost />} />

      <Route exact path='/users' element={<Users />} />
      <Route exact path='/users/:userId/edit' element={<EditUser />} />
      <Route exact path='/users/create' element={<CreateUser />} />

      <Route exact path='/products' element={<Products />} />
      <Route exact path='/products/:productId/edit' element={<EditProduct />} />
      <Route exact path='/products/create' element={<CreateProduct />} />

      <Route exact path='/auth' element={<Auth />} />
    </Routes>
  );
};

export default App;
