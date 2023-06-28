import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import { logOutAction } from '../../store/auth/action';
import PostCard from '../../components/PostCard';
import { useEffect, useState } from 'react';
import { getPostAction } from '../../store/posts/action';
// import { getPostsApi } from '../../api';

const Posts = () => {
  const user = useSelector((state) => state?.auth?.user);
  const posts = useSelector((state) => state?.post?.posts);

  const dispatch = useDispatch();

  // Step 2: Create a state to store the posts
  // const [posts, setPosts] = useState([]);

  // // Step 1: Create a function to get the posts from the API
  // const getPosts = async () => {
  //   try {
  //     const response = await getPostsApi();
  //     setPosts(response.posts);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // getPosts();
    dispatch(getPostAction());
  }, [dispatch]);

  return (
    <>
      <Header user={user} onLogout={() => dispatch(logOutAction())} />
      <h2 className='text-center text-xl mt-2'>Welcome to the posts page!</h2>
      <section>
        {posts.map((post) => (
          <PostCard data={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

export default Posts;
